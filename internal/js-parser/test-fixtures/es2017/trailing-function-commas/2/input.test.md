# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > trailing-function-commas > 2`

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
	loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:0-1:29
	path: UIDPath<es2017/trailing-function-commas/2/input.js>
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "log"
				loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:9-1:12 (log)
			}
			loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:0-1:29
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:26-1:29
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:12-1:25
				params: Array [
					JSBindingIdentifier {
						name: "n"
						loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:13-1:14 (n)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:13-1:14
						}
					}
					JSBindingIdentifier {
						name: "op"
						loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:16-1:18 (op)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:16-1:18
						}
					}
					JSBindingIdentifier {
						name: "val"
						loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:20-1:23 (val)
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: SourceLocation es2017/trailing-function-commas/2/input.js 1:20-1:23
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
