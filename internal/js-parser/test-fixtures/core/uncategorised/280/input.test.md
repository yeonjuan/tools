# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 280`

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
	loc: SourceLocation core/uncategorised/280/input.js 1:0-1:34
	path: UIDPath<core/uncategorised/280/input.js>
	body: Array [
		JSTryStatement {
			handler: undefined
			loc: SourceLocation core/uncategorised/280/input.js 1:0-1:34
			block: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation core/uncategorised/280/input.js 1:4-1:7
			}
			finalizer: JSBlockStatement {
				directives: Array []
				loc: SourceLocation core/uncategorised/280/input.js 1:16-1:34
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation core/uncategorised/280/input.js 1:18-1:32
						expression: JSCallExpression {
							loc: SourceLocation core/uncategorised/280/input.js 1:18-1:32
							callee: JSReferenceIdentifier {
								name: "cleanup"
								loc: SourceLocation core/uncategorised/280/input.js 1:18-1:25 (cleanup)
							}
							arguments: Array [
								JSReferenceIdentifier {
									name: "stuff"
									loc: SourceLocation core/uncategorised/280/input.js 1:26-1:31 (stuff)
								}
							]
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

```
