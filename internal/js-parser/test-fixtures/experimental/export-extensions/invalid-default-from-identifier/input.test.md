# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > export-extensions > invalid-default-from-identifier`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation experimental/export-extensions/invalid-default-from-identifier/input.js 1:0-2:0
	path: UIDPath<experimental/export-extensions/invalid-default-from-identifier/input.js>
	body: Array [
		JSExportDefaultDeclaration {
			loc: SourceLocation experimental/export-extensions/invalid-default-from-identifier/input.js 1:0-1:20
			declaration: JSReferenceIdentifier {
				name: "from"
				loc: SourceLocation experimental/export-extensions/invalid-default-from-identifier/input.js 1:15-1:19 (from)
			}
		}
	]
}
```

### `diagnostics`

```

```
