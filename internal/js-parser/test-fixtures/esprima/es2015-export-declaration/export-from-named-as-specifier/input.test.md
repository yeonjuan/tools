# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-from-named-as-specifier`

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
	loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:0-2:0
	path: UIDPath<esprima/es2015-export-declaration/export-from-named-as-specifier/input.js>
	body: Array [
		JSExportExternalDeclaration {
			defaultSpecifier: undefined
			exportKind: undefined
			namespaceSpecifier: undefined
			loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:0-1:31
			source: JSStringLiteral {
				value: "foo"
				loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:25-1:30
			}
			namedSpecifiers: Array [
				JSExportExternalSpecifier {
					loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:8-1:18
					exported: JSIdentifier {
						name: "bar"
						loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:15-1:18 (bar)
					}
					local: JSIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-export-declaration/export-from-named-as-specifier/input.js 1:8-1:11 (foo)
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
