# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > opts > allowUndeclaredExports`

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
	loc: SourceLocation core/opts/allowUndeclaredExports/input.js 1:0-1:15
	path: UIDPath<core/opts/allowUndeclaredExports/input.js>
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation core/opts/allowUndeclaredExports/input.js 1:0-1:15
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation core/opts/allowUndeclaredExports/input.js 1:9-1:12
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation core/opts/allowUndeclaredExports/input.js 1:9-1:12 (foo)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation core/opts/allowUndeclaredExports/input.js 1:9-1:12 (foo)
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

```
