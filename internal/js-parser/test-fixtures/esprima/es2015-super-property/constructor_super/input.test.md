# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-super-property > constructor_super`

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
	loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 1:0-6:0
	path: UIDPath<esprima/es2015-super-property/constructor_super/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 1:0-5:1
			meta: JSClassHead {
				implements: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 1:0-5:1
				superClass: JSReferenceIdentifier {
					name: "B"
					loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 1:16-1:17 (B)
				}
				body: Array [
					JSClassMethod {
						kind: "constructor"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:4-2:15 (constructor)
							}
							loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:4-2:15
						}
						loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:4-4:5
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:4-2:15
							start: Position 2:4
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
							loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:15-2:17
						}
						body: JSBlockStatement {
							directives: Array []
							loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 2:18-4:5
							body: Array [
								JSExpressionStatement {
									loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 3:8-3:16
									expression: JSCallExpression {
										arguments: Array []
										callee: JSSuper {loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 3:8-3:13}
										loc: SourceLocation esprima/es2015-super-property/constructor_super/input.js 3:8-3:15
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

```
