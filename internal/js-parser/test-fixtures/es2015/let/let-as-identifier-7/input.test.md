# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > let > let-as-identifier-7`

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
	loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:0-3:0
	path: UIDPath<es2015/let/let-as-identifier-7/input.js>
	body: Array [
		JSWhileStatement {
			loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:0-2:14
			test: JSNumericLiteral {
				value: 0
				format: undefined
				loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:7-1:8
			}
			body: JSExpressionStatement {
				loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:10-2:14
				expression: JSBinaryExpression {
					operator: "instanceof"
					loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:10-2:14
					left: JSReferenceIdentifier {
						name: "let"
						loc: SourceLocation es2015/let/let-as-identifier-7/input.js 1:10-1:13 (let)
					}
					right: JSReferenceIdentifier {
						name: "Foo"
						loc: SourceLocation es2015/let/let-as-identifier-7/input.js 2:11-2:14 (Foo)
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
