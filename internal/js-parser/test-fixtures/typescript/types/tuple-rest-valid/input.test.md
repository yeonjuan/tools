# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > tuple-rest-valid`

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
	loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:0-2:0
	path: UIDPath<typescript/types/tuple-rest-valid/input.ts>
	syntax: Array ["ts"]
	body: Array [
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "Unbounded"
				loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:5-1:14 (Unbounded)
			}
			typeParameters: undefined
			loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:0-1:39
			right: TSTupleType {
				loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:17-1:38
				elementTypes: Array [
					TSTupleElement {
						name: undefined
						optional: false
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:18-1:22
						typeAnnotation: TSRestType {
							loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:18-1:22
							argument: TSTypeReference {
								typeParameters: undefined
								loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:21-1:22
								typeName: JSReferenceIdentifier {
									name: "A"
									loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:21-1:22 (A)
								}
							}
						}
					}
					TSTupleElement {
						name: undefined
						optional: false
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:24-1:28
						typeAnnotation: TSRestType {
							loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:24-1:28
							argument: TSTypeReference {
								typeParameters: undefined
								loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:27-1:28
								typeName: JSReferenceIdentifier {
									name: "B"
									loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:27-1:28 (B)
								}
							}
						}
					}
					TSTupleElement {
						name: undefined
						optional: false
						loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:30-1:37
						typeAnnotation: TSBooleanKeywordTypeAnnotation {loc: SourceLocation typescript/types/tuple-rest-valid/input.ts 1:30-1:37}
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
