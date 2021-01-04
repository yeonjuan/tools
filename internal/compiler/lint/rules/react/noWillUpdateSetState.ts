import {createVisitor, signals} from "@internal/compiler";
import {descriptions} from "@internal/diagnostics";
import {doesNodeMatchPattern, isConditional} from "@internal/js-ast-utils";
import {insideClassComponent} from "../../utils/react";

export default createVisitor({
	name: "react/noWillUpdateSetState",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSClassMethod" &&
			node.key.type === "JSStaticPropertyKey" &&
			node.key.value.type === "JSIdentifier" &&
			(node.key.value.name === "componentWillUpdate" ||
			node.key.value.name === "UNSAFE_componentWillUpdate") &&
			insideClassComponent(path)
		) {
			path.traverse(
				"body",
				(childPath) => {
					const childNode = childPath.node;
					if (
						doesNodeMatchPattern(childNode, "this.setState") &&
						childPath.findAncestry(({node}) => isConditional(node)) ===
						undefined
					) {
						childPath.context.addNodeDiagnostic(
							childNode,
							descriptions.LINT.REACT_NO_WILL_UPDATE_SET_STATE,
						);
					}
				},
			);
		}

		return signals.retain;
	},
});
