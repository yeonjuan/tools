# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0047`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0047/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0047/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation esprima/invalid-syntax/migrated_0047/input.js 1:0-1:12
			expression: JSAssignmentExpression {
				operator: "="
				loc: SourceLocation esprima/invalid-syntax/migrated_0047/input.js 1:0-1:12
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: SourceLocation esprima/invalid-syntax/migrated_0047/input.js 1:8-1:7
				}
				right: JSNumericLiteral {
					value: 10
					format: undefined
					loc: SourceLocation esprima/invalid-syntax/migrated_0047/input.js 1:10-1:12
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
				message: RAW_MARKUP {value: "Invalid left-hand side in assignment expression"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:6
				path: UIDPath<esprima/invalid-syntax/migrated_0047/input.js>
				start: Position 1:1
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0047/input.js:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid left-hand side in assignment expression

    (1 + 1) = 10
     ^^^^^


```
