# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 312`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/312/input.js 1:0-1:10
	path: UIDPath<es2015/uncategorised/312/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:6
				path: UIDPath<es2015/uncategorised/312/input.js>
				start: Position 1:5
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected character <emphasis>=</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Expected character <emphasis>,</emphasis>"}
					}
				]
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/312/input.js 1:0-1:8
			expression: JSCallExpression {
				loc: SourceLocation es2015/uncategorised/312/input.js 1:0-1:8
				callee: JSReferenceIdentifier {
					name: "f"
					loc: SourceLocation es2015/uncategorised/312/input.js 1:0-1:1 (f)
				}
				arguments: Array [
					JSAssignmentExpression {
						operator: "="
						loc: SourceLocation es2015/uncategorised/312/input.js 1:2-1:8
						right: JSNumericLiteral {
							value: 0
							format: undefined
							loc: SourceLocation es2015/uncategorised/312/input.js 1:7-1:8
						}
						left: JSAssignmentObjectPattern {
							rest: undefined
							loc: SourceLocation es2015/uncategorised/312/input.js 1:2-1:4
							properties: Array [
								JSAssignmentObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "x"
											loc: SourceLocation es2015/uncategorised/312/input.js 1:3-1:4 (x)
										}
										loc: SourceLocation es2015/uncategorised/312/input.js 1:3-1:4
									}
									value: JSAssignmentIdentifier {
										name: "x"
										loc: SourceLocation es2015/uncategorised/312/input.js 1:3-1:4 (x)
									}
									loc: SourceLocation es2015/uncategorised/312/input.js 1:3-1:4
								}
							]
						}
					}
				]
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/312/input.js 1:8-1:9
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2015/uncategorised/312/input.js 1:8-1:9
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/312/input.js 1:9-1:10
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2015/uncategorised/312/input.js 1:9-1:10
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/312/input.js:1:5 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected character =

    f({x = 0})
         ^

  ℹ Expected character ,


```
