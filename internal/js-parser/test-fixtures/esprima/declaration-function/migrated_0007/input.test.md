# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-function > migrated_0007`

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
	loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:0-2:0
	path: UIDPath<esprima/declaration-function/migrated_0007/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:9-1:14 (hello)
			}
			loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:0-1:33
			body: JSBlockStatement {
				directives: Array []
				loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:21-1:33
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:23-1:31
						expression: JSCallExpression {
							arguments: Array []
							loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:23-1:30
							callee: JSReferenceIdentifier {
								name: "sayHi"
								loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:23-1:28 (sayHi)
							}
						}
					}
				]
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:14-1:20
				params: Array [
					JSBindingIdentifier {
						name: "a"
						loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:15-1:16 (a)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:15-1:16
						}
					}
					JSBindingIdentifier {
						name: "b"
						loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:18-1:19 (b)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation esprima/declaration-function/migrated_0007/input.js 1:18-1:19
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

```
