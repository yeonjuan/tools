# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > async-generators > class-method-no-asi`

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
	loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 1:0-5:0
	path: UIDPath<es2018/async-generators/class-method-no-asi/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 1:0-4:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 1:0-4:1
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "async"
								loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 2:2-2:7 (async)
							}
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 2:2-2:7
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 2:2-2:7
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 2:2-2:7
							start: Position 2:2
						}
					}
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:4-3:5 (a)
							}
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:4-3:5
						}
						loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:2-3:9
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:7-3:9
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:2-3:5
							start: Position 3:2
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: SourceLocation es2018/async-generators/class-method-no-asi/input.js 3:5-3:7
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
