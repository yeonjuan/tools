# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-arrow-function > complex-rest-in-arrow-not-allowed`

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
	loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:0-1:16
			expression: JSArrowFunctionExpression {
				loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:0-1:15
				body: JSNumericLiteral {
					value: 0
					format: undefined
					loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:14-1:15
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					returnType: undefined
					thisType: undefined
					loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:0-1:13
					params: Array [
						JSBindingIdentifier {
							name: "a"
							loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:1-1:2 (a)
						}
					]
					rest: JSBindingArrayPattern {
						rest: undefined
						loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:6-1:9
						elements: Array [
							JSBindingIdentifier {
								name: "a"
								loc: SourceLocation esprima/es2015-arrow-function/complex-rest-in-arrow-not-allowed/input.js 1:7-1:8 (a)
							}
						]
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
