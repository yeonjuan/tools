# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-const > migrated_0001`

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
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:0-2:0
	path: UIDPath<esprima/declaration-const/migrated_0001/input.js>
	body: Array [
		JSBlockStatement {
			directives: Array []
			loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:0-1:16
			body: Array [
				JSVariableDeclarationStatement {
					loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:2-1:14
					declaration: JSVariableDeclaration {
						kind: "const"
						loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:2-1:14
						declarations: Array [
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "x"
									loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:8-1:9 (x)
								}
								loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:8-1:14
								init: JSNumericLiteral {
									value: 42
									format: undefined
									loc: SourceLocation esprima/declaration-const/migrated_0001/input.js 1:12-1:14
								}
							}
						]
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
