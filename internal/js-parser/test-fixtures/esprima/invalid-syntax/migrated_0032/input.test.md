# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0032`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0032/input.js 1:0-1:3
	path: UIDPath<esprima/invalid-syntax/migrated_0032/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0032/input.js 1:0-1:3
			expression: JSReferenceIdentifier {
				name: "x\0"
				loc: SourceLocation esprima/invalid-syntax/migrated_0032/input.js 1:0-1:3 (x\0)
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
				end: Position 1:2
				path: UIDPath<esprima/invalid-syntax/migrated_0032/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0032/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expecting Unicode escape sequence \uXXXX

    x\
      ^


```
