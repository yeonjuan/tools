# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > invalid-63`

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
	loc: SourceLocation experimental/numeric-separator/invalid-63/input.js 1:0-2:0
	path: UIDPath<experimental/numeric-separator/invalid-63/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Invalid or unexpected int token"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:0
				path: UIDPath<experimental/numeric-separator/invalid-63/input.js>
				start: Position 1:0
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation experimental/numeric-separator/invalid-63/input.js 1:0-1:9
			expression: JSSequenceExpression {
				loc: SourceLocation experimental/numeric-separator/invalid-63/input.js 1:0-1:9
				expressions: Array [
					JSNumericLiteral {
						value: 161
						format: "hex"
						loc: SourceLocation experimental/numeric-separator/invalid-63/input.js 1:0-1:6
					}
					JSNumericLiteral {
						value: 0
						format: undefined
						loc: SourceLocation experimental/numeric-separator/invalid-63/input.js 1:8-1:9
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/numeric-separator/invalid-63/input.js:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid or unexpected int token

    0xa_1_, 0
    ^


```
