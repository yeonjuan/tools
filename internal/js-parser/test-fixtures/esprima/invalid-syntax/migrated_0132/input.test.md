# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0132`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0132/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0132/input.js>
	body: Array [
		JSWithStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0132/input.js 1:0-2:0
			object: JSReferenceIdentifier {
				name: "x"
				loc: SourceLocation esprima/invalid-syntax/migrated_0132/input.js 1:5-1:6 (x)
			}
			body: JSExpressionStatement {
				loc: SourceLocation esprima/invalid-syntax/migrated_0132/input.js 2:0-2:0
				expression: JSReferenceIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0132/input.js 2:0-2:0
				}
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
				message: RAW_MARKUP {value: "Unknown start to an statement expression"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:7
				path: UIDPath<esprima/invalid-syntax/migrated_0132/input.js>
				start: Position 2:0
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0132/input.js:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    with(x)


```
