# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0162`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0162/input.js 1:0-1:2
	path: UIDPath<esprima/invalid-syntax/migrated_0162/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0162/input.js 1:0-1:2
			expression: JSReferenceIdentifier {
				name: "\0"
				loc: SourceLocation esprima/invalid-syntax/migrated_0162/input.js 1:0-1:2 (\0)
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Expecting Unicode escape sequence \\uXXXX"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:1
				path: UIDPath<esprima/invalid-syntax/migrated_0162/input.js>
				start: Position 1:1
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0162/input.js:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expecting Unicode escape sequence \uXXXX

    \
     ^


```
