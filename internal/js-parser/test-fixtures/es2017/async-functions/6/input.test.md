# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 6`

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
	loc: SourceLocation es2017/async-functions/6/input.js 1:0-2:0
	path: UIDPath<es2017/async-functions/6/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:14
				path: UIDPath<es2017/async-functions/6/input.js>
				start: Position 1:14
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/6/input.js 1:0-1:14
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2017/async-functions/6/input.js 1:0-1:14
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: SourceLocation es2017/async-functions/6/input.js 1:12-1:14
				}
				head: JSFunctionHead {
					async: true
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation es2017/async-functions/6/input.js 1:0-1:11
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation es2017/async-functions/6/input.js 1:14-1:16
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				loc: SourceLocation es2017/async-functions/6/input.js 1:15-1:15
			}
		}
	]
}
```

### `diagnostics`

```

 es2017/async-functions/6/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    async () => {}()
                  ^


```
