# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-default-strict`

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
	loc: SourceLocation es2015/yield/parameter-default-strict/input.js 1:0-2:25
	path: UIDPath<es2015/yield/parameter-default-strict/input.js>
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: SourceLocation es2015/yield/parameter-default-strict/input.js 1:0-1:13
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "yield is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:21
				path: UIDPath<es2015/yield/parameter-default-strict/input.js>
				start: Position 2:16
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:9-2:11 (fn)
			}
			loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:0-2:25
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:23-2:25
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:11-2:22
				params: Array [
					JSBindingAssignmentPattern {
						loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:12-2:21
						right: JSReferenceIdentifier {
							name: "yield"
							loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:16-2:21 (yield)
						}
						left: JSBindingIdentifier {
							name: "x"
							loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:12-2:13 (x)
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: SourceLocation es2015/yield/parameter-default-strict/input.js 2:12-2:13
							}
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

 es2015/yield/parameter-default-strict/input.js:2:16 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ yield is a reserved word

    1 │ "use strict";
  > 2 │ function fn(x = yield) {}
      │                 ^^^^^


```
