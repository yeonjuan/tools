# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > tsx > brace-is-block`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 1:0-4:0
	path: UIDPath<typescript/tsx/brace-is-block/input.tsx>
	syntax: Array [
		"ts"
		"jsx"
	]
	comments: Array [
		CommentLine {
			id: "0"
			value: " Regression test for tokenizer bug where the `{` after `<T>` was considered a JSX interpolation."
			loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 1:0-1:98
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				leadingComments: undefined
				loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:6-2:7 (C)
			}
			leadingComments: Array ["0"]
			loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:0-2:23
			meta: JSClassHead {
				body: Array []
				implements: undefined
				leadingComments: undefined
				typeParameters: undefined
				loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:0-2:23
				superClass: JSReferenceIdentifier {
					name: "D"
					loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:16-2:17 (D)
				}
				superTypeParameters: TSTypeParameterInstantiation {
					loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:17-2:20
					params: Array [
						TSTypeReference {
							typeParameters: undefined
							loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:18-2:19
							typeName: JSReferenceIdentifier {
								name: "T"
								loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 2:18-2:19 (T)
							}
						}
					]
				}
			}
		}
		JSExpressionStatement {
			loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 3:0-3:4
			expression: JSXElement {
				name: JSXReferenceIdentifier {
					name: "C"
					loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 3:1-3:2
				}
				attributes: Array []
				children: Array []
				selfClosing: true
				typeArguments: undefined
				loc: SourceLocation typescript/tsx/brace-is-block/input.tsx 3:0-3:4
			}
		}
	]
}
```

### `diagnostics`

```

```
