# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-methods > failure-spaces`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 1:0-6:0
	path: UIDPath<experimental/class-private-methods/failure-spaces/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unexpected space between # and identifier"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:3
				path: UIDPath<experimental/class-private-methods/failure-spaces/input.js>
				start: Position 2:3
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Spaces"
				loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 1:6-1:12 (Spaces)
			}
			loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 1:0-5:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 1:0-5:1
				body: Array [
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "wrongSpaces"
								loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:5-2:16 (wrongSpaces)
							}
							loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:2-2:16
						}
						loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:2-4:3
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:2-2:16
							start: Position 2:2
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:16-2:18
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 2:19-4:3
							body: Array [
								JSReturnStatement {
									loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 3:4-3:18
									argument: JSCallExpression {
										arguments: Array []
										loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 3:11-3:17
										callee: JSReferenceIdentifier {
											name: "fail"
											loc: SourceLocation experimental/class-private-methods/failure-spaces/input.js 3:11-3:15 (fail)
										}
									}
								}
							]
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

 experimental/class-private-methods/failure-spaces/input.js:2:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected space between # and identifier

    1 │ class Spaces {
  > 2 │   #  wrongSpaces() {
      │    ^
    3 │     return fail();
    4 │   }


```
