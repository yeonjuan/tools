# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 249`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/249/input.js 1:0-1:23
	path: UIDPath<es2015/uncategorised/249/input.js>
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: SourceLocation es2015/uncategorised/249/input.js 1:0-1:13
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Legacy octal literals are not allowed in strict mode"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:23
				path: UIDPath<es2015/uncategorised/249/input.js>
				start: Position 1:23
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/249/input.js 1:14-1:23
			expression: JSArrowFunctionExpression {
				loc: SourceLocation es2015/uncategorised/249/input.js 1:14-1:23
				body: JSNumericLiteral {
					value: 0
					format: "octal"
					loc: SourceLocation es2015/uncategorised/249/input.js 1:21-1:23
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: SourceLocation es2015/uncategorised/249/input.js 1:14-1:20
					params: Array [
						JSBindingIdentifier {
							name: "a"
							loc: SourceLocation es2015/uncategorised/249/input.js 1:15-1:16 (a)
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

 es2015/uncategorised/249/input.js:1:23 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Legacy octal literals are not allowed in strict mode

    "use strict"; (a) => 00
                           ^


```
