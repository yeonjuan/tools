# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 313`

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
	loc: SourceLocation core/uncategorised/313/input.js 1:0-2:8
	path: UIDPath<core/uncategorised/313/input.js>
	body: Array [
		JSBlockStatement {
			directives: Array []
			loc: SourceLocation core/uncategorised/313/input.js 1:0-2:8
			body: Array [
				JSThrowStatement {
					loc: SourceLocation core/uncategorised/313/input.js 1:2-1:13
					argument: JSReferenceIdentifier {
						name: "error"
						loc: SourceLocation core/uncategorised/313/input.js 1:8-1:13 (error)
					}
				}
				JSExpressionStatement {
					loc: SourceLocation core/uncategorised/313/input.js 2:0-2:6
					expression: JSReferenceIdentifier {
						name: "error"
						loc: SourceLocation core/uncategorised/313/input.js 2:0-2:5 (error)
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

```
