# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 211`

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
	loc: SourceLocation es2015/uncategorised/211/input.js 1:0-1:2
	path: UIDPath<es2015/uncategorised/211/input.js>
	body: Array [
		JSExpressionStatement {
			loc: SourceLocation es2015/uncategorised/211/input.js 1:0-1:2
			expression: JSNumericLiteral {
				value: 0
				format: "binary"
				loc: SourceLocation es2015/uncategorised/211/input.js 1:0-1:2
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
				message: RAW_MARKUP {value: "Expected number in radix <emphasis>2</emphasis>"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:2
				path: UIDPath<es2015/uncategorised/211/input.js>
				start: Position 1:2
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/211/input.js:1:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected number in radix 2

    0B
      ^


```
