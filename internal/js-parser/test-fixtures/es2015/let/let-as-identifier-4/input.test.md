# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > let > let-as-identifier-4`

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
	loc: SourceLocation es2015/let/let-as-identifier-4/input.js 1:0-2:0
	path: UIDPath<es2015/let/let-as-identifier-4/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/let/let-as-identifier-4/input.js 1:0-1:9
			expression: JSBinaryExpression {
				operator: "in"
				loc: SourceLocation es2015/let/let-as-identifier-4/input.js 1:0-1:9
				left: JSReferenceIdentifier {
					name: "let"
					loc: SourceLocation es2015/let/let-as-identifier-4/input.js 1:0-1:3 (let)
				}
				right: JSObjectExpression {
					properties: Array []
					loc: SourceLocation es2015/let/let-as-identifier-4/input.js 1:7-1:9
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
