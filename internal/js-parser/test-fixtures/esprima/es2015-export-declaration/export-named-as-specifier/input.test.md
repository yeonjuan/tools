# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-named-as-specifier`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:0-3:0
	path: UIDPath<esprima/es2015-export-declaration/export-named-as-specifier/input.js>
	body: Array [
		JSVariableDeclarationStatement {
			loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:0-1:13
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:0-1:13
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "foo"
							loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:4-1:7 (foo)
						}
						init: undefined
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:4-1:7
					}
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "bar"
							loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:9-1:12 (bar)
						}
						init: undefined
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 1:9-1:12
					}
				]
			}
		}
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 2:0-2:20
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 2:8-2:18
					exported: JSIdentifier {
						name: "bar"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 2:15-2:18 (bar)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation esprima/es2015-export-declaration/export-named-as-specifier/input.js 2:8-2:11 (foo)
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
