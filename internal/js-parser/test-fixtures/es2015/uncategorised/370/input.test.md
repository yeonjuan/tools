# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 370`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation es2015/uncategorised/370/input.js 1:0-2:0
	path: UIDPath<es2015/uncategorised/370/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "enum is a reserved word"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:10
				path: UIDPath<es2015/uncategorised/370/input.js>
				start: Position 1:6
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation es2015/uncategorised/370/input.js 1:0-1:19
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: SourceLocation es2015/uncategorised/370/input.js 1:0-1:19
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "enum"
							loc: SourceLocation es2015/uncategorised/370/input.js 1:6-1:10 (enum)
						}
						loc: SourceLocation es2015/uncategorised/370/input.js 1:6-1:18
						init: JSCallExpression {
							arguments: Array []
							loc: SourceLocation es2015/uncategorised/370/input.js 1:13-1:18
							callee: JSReferenceIdentifier {
								name: "foo"
								loc: SourceLocation es2015/uncategorised/370/input.js 1:13-1:16 (foo)
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

 es2015/uncategorised/370/input.js:1:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ enum is a reserved word

    const enum = foo();
          ^^^^


```
