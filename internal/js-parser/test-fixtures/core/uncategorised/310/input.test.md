# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 310`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation core/uncategorised/310/input.js 1:0-2:5
	path: UIDPath<core/uncategorised/310/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation core/uncategorised/310/input.js 1:0-2:5
			expression: JSFunctionExpression {
				id: undefined
				loc: SourceLocation core/uncategorised/310/input.js 1:1-2:4
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: SourceLocation core/uncategorised/310/input.js 1:9-1:11
				}
				body: JSBlockStatement {
					directives: Array []
					loc: SourceLocation core/uncategorised/310/input.js 1:11-2:4
					body: Array [
						JSReturnStatement {
							argument: undefined
							loc: SourceLocation core/uncategorised/310/input.js 1:13-1:19
						}
						JSExpressionStatement {
							loc: SourceLocation core/uncategorised/310/input.js 2:0-2:2
							expression: JSReferenceIdentifier {
								name: "x"
								loc: SourceLocation core/uncategorised/310/input.js 2:0-2:1 (x)
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
