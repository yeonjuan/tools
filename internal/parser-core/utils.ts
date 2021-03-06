import {default as ParserCore} from "./ParserCore";
import {
	ParserCoreFactory,
	ParserCoreImplementation,
	ParserCoreOverrides,
	ParserCoreTypes,
	ParserOptions,
	Position,
	SourceLocation,
} from "./types";
import {catchDiagnosticsSync} from "@internal/diagnostics";
import {
	TaggedTemplateFunction,
	isPlainObject,
} from "@internal/typescript-helpers";
import {pretty} from "@internal/pretty-format";
import {AnyPath, UNKNOWN_PATH, isPath} from "@internal/path";
import {isIndexedNumberish} from "@internal/math";

export function isDigit(char: undefined | string): boolean {
	return char !== undefined && /[0-9]/.test(char);
}

export function isAlpha(char: undefined | string): boolean {
	return char !== undefined && /[A-Za-z]/.test(char);
}

export function isHexDigit(char: undefined | string): boolean {
	return char !== undefined && /[0-9A-Fa-f]/.test(char);
}

export function isESIdentifierChar(char: undefined | string): boolean {
	return char !== undefined && /[A-F0-9a-z_$]/.test(char);
}

export function isESIdentifierStart(char: undefined | string): boolean {
	return char !== undefined && /[A-Fa-z_$]/.test(char);
}

export function isntLineBreak(char: string): boolean {
	return char !== "\n";
}

export function isntWhitespace(char: string): boolean {
	return char !== "\n" && char !== " " && char !== "\t";
}

export function createParser<
	Types extends ParserCoreTypes,
	Impl extends ParserCoreImplementation<Types> = ParserCoreImplementation<Types>
>(impl: Impl): ParserCoreFactory<Types> {
	return {
		create: (
			opts: Types["options"],
			meta: Types["meta"],
			overrides?: ParserCoreOverrides,
		) => {
			return new ParserCore(impl, opts, meta, overrides);
		},
	};
}

export function createParserTemplateFactory<Ret>(
	callback: (input: string) => Ret,
): TaggedTemplateFunction<Ret, string> {
	const cache: Map<
		TemplateStringsArray,
		{
			input: string;
			value: Ret;
		}
	> = new Map();

	return (strs, ...subs) => {
		let input = "";
		for (let i = 0; i < strs.length; i++) {
			input += strs[i];

			const sub = subs[i];
			if (sub) {
				input += sub;
			}
		}

		const cached = cache.get(strs);
		if (cached?.input === input) {
			return cached.value;
		}

		const value = callback(input);
		cache.set(strs, {input, value});
		return value;
	};
}

export function tryParseWithOptionalOffsetPosition<
	Opts extends ParserOptions,
	Ret
>(
	parserOpts: Opts,
	opts: {
		getOffsetPosition: () => Position;
		parse: (opts: Opts) => Ret;
	},
): Ret {
	const {value} = catchDiagnosticsSync(() => {
		return opts.parse(parserOpts);
	});

	if (value === undefined) {
		// Diagnostics must be present
		opts.parse({
			...parserOpts,
			offsetPosition: opts.getOffsetPosition(),
		});
		throw new Error("Expected error");
	} else {
		return value;
	}
}

/**
 * -1: left < right
 * 0: left === right
 * 1: left > right
 */
export function comparePositions(
	left: undefined | Position,
	right: undefined | Position,
): -1 | 0 | 1 {
	if (left === undefined && right !== undefined) {
		return -1;
	}

	if (left !== undefined && right === undefined) {
		return 1;
	}

	if (left === undefined || right === undefined) {
		return 0;
	}

	const leftLine = left.line.valueOf();
	const leftColumn = left.column.valueOf();
	const rightLine = right.line.valueOf();
	const rightColumn = right.column.valueOf();

	if (leftLine === rightLine) {
		if (leftColumn < rightColumn) {
			return -1;
		}

		if (leftColumn > rightColumn) {
			return 1;
		}

		return 0;
	}

	if (leftLine < rightLine) {
		return -1;
	}

	if (leftLine > rightLine) {
		return 1;
	}

	throw new Error(
		"Not a possible condition...? All possible states of a.line and b.line should have been handled above",
	);
}

export function derivePositionKey(pos: Position): string {
	return `${String(pos.line.valueOf())}:${String(pos.column.valueOf())}`;
}

export function addPositions(a: Position, b: Position): Position {
	return {
		line: a.line.add(b.line).decrement(),
		column: a.column.add(b.column),
	};
}

// Utility methods for dealing with nodes
export function extractSourceLocationRangeFromNodes(
	nodes: {
		loc?: SourceLocation;
	}[],
): undefined | SourceLocation {
	if (nodes.length === 0) {
		return undefined;
	}

	let path: AnyPath = UNKNOWN_PATH;
	let hasPath = false;
	let start: undefined | Position = undefined;
	let end: undefined | Position = undefined;

	for (const node of nodes) {
		const {loc} = node;
		if (loc === undefined) {
			continue;
		}

		if (start === undefined || comparePositions(loc.start, start) === -1) {
			start = loc.start;
		}

		if (end === undefined || comparePositions(loc.end, end) === 1) {
			end = loc.end;
		}

		if (hasPath) {
			if (path !== loc.path) {
				throw new Error(
					pretty`Mixed filenames in node, expected ${path} but got ${loc.path}`,
				);
			}
		} else {
			path = loc.path;
			hasPath = true;
		}
	}

	if (start === undefined || end === undefined) {
		return undefined;
	}

	return {
		path,
		start,
		end,
	};
}

export function isPositionish(val: unknown): val is Position {
	return (
		isPlainObject(val) &&
		isIndexedNumberish(val.line) &&
		isIndexedNumberish(val.column)
	);
}

export function isSourceLocation(val: unknown): val is SourceLocation {
	if (!isPlainObject(val)) {
		return false;
	}

	// Make sure there's no other sneaky keys
	for (const key in val) {
		if (
			key !== "path" &&
			key !== "identifierName" &&
			key !== "start" &&
			key !== "end"
		) {
			return false;
		}
	}

	// Verify types
	return (
		(isPath(val) || typeof val.filename === "undefined") &&
		(typeof val.identifierName === "string" ||
		typeof val.identifierName === "undefined") &&
		isPositionish(val.start) &&
		isPositionish(val.end)
	);
}
