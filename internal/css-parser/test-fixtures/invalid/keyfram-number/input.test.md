# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > keyfram-number`

```javascript
CSSRoot {
	comments: Array []
	corrupt: false
	integrity: undefined
	loc: SourceLocation invalid/keyfram-number/input.css 1:0-5:1
	path: RelativePath<invalid/keyfram-number/input.css>
	body: Array [
		CSSAtRule {
			name: "keyframes"
			prelude: Array []
			loc: SourceLocation invalid/keyfram-number/input.css 1:0-5:1
			block: CSSKeyframe {
				name: CSSKeyframeName {
					value: CSSRaw {
						value: "foo"
						loc: SourceLocation invalid/keyfram-number/input.css 1:11-1:11
					}
					loc: SourceLocation invalid/keyfram-number/input.css 1:11-1:14
				}
				value: Array []
				loc: SourceLocation invalid/keyfram-number/input.css 1:10-5:1
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "css"
				sourceText: undefined
				end: Position 2:3
				path: RelativePath<invalid/keyfram-number/input.css>
				start: Position 2:1
			}
			description: Object {
				categoryValue: "css"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "The selector name of the keyframe is not correct."}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "The only valid values are percentages, and the keywords <emphasis>from</emphasis> and <emphasis>to</emphasis>."}
					}
				]
			}
		}
	]
}
```
