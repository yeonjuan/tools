# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/html-parser/index.test.ts --update-snapshots` to update.

## `attributes`

### `ast`

```javascript
HTMLRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	integrity: undefined
	loc: SourceLocation attributes/input.html 1:0-4:15
	path: UIDPath<attributes/input.html>
	body: Array [
		HTMLElement {
			name: HTMLIdentifier {
				name: "a"
				loc: SourceLocation attributes/input.html 1:1-1:2
			}
			children: Array []
			selfClosing: false
			loc: SourceLocation attributes/input.html 1:0-2:6
			attributes: Array [
				HTMLAttribute {
					name: HTMLIdentifier {
						name: "href"
						loc: SourceLocation attributes/input.html 1:3-1:7
					}
					value: HTMLString {
						value: ""
						loc: SourceLocation attributes/input.html 1:8-2:1
					}
					loc: SourceLocation attributes/input.html 1:3-2:1
				}
			]
		}
		HTMLElement {
			name: HTMLIdentifier {
				name: "input"
				loc: SourceLocation attributes/input.html 4:1-4:6
			}
			children: Array []
			selfClosing: true
			loc: SourceLocation attributes/input.html 4:0-4:15
			attributes: Array [
				HTMLAttribute {
					name: HTMLIdentifier {
						name: "checked"
						loc: SourceLocation attributes/input.html 4:7-4:14
					}
					value: undefined
					loc: SourceLocation attributes/input.html 4:7-4:14
				}
			]
		}
	]
}
```

### `diagnostics`

```

```
