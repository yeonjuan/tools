# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > interface > reserved-method-name`

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
	loc: SourceLocation typescript/interface/reserved-method-name/input.ts 1:0-4:0
	path: UIDPath<typescript/interface/reserved-method-name/input.ts>
	syntax: Array ["ts"]
	body: Array [
		TSInterfaceDeclaration {
			id: JSBindingIdentifier {
				name: "I"
				loc: SourceLocation typescript/interface/reserved-method-name/input.ts 1:10-1:11 (I)
			}
			extends: undefined
			typeParameters: undefined
			loc: SourceLocation typescript/interface/reserved-method-name/input.ts 1:0-3:1
			body: TSInterfaceBody {
				loc: SourceLocation typescript/interface/reserved-method-name/input.ts 1:12-3:1
				body: Array [
					TSMethodSignature {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "catch"
								loc: SourceLocation typescript/interface/reserved-method-name/input.ts 2:4-2:9 (catch)
							}
							loc: SourceLocation typescript/interface/reserved-method-name/input.ts 2:4-2:9
						}
						optional: false
						loc: SourceLocation typescript/interface/reserved-method-name/input.ts 2:4-2:18
						returnType: TSVoidKeywordTypeAnnotation {loc: SourceLocation typescript/interface/reserved-method-name/input.ts 2:13-2:17}
						meta: TSSignatureDeclarationMeta {
							parameters: Array []
							rest: undefined
							typeParameters: undefined
							loc: SourceLocation typescript/interface/reserved-method-name/input.ts 2:9-2:17
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
