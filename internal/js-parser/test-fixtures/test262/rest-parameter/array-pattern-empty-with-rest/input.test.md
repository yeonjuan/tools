# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-empty-with-rest`

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
	loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:0-2:0
	path: UIDPath<test262/rest-parameter/array-pattern-empty-with-rest/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "emptyWithRest"
				loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:9-1:22 (emptyWithRest)
			}
			loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:0-1:37
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:35-1:37
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:22-1:34
				rest: JSBindingArrayPattern {
					elements: Array []
					loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:26-1:33
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:26-1:33
					}
					rest: JSBindingArrayPattern {
						elements: Array []
						rest: undefined
						loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:30-1:32
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation test262/rest-parameter/array-pattern-empty-with-rest/input.js 1:30-1:32
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

```
