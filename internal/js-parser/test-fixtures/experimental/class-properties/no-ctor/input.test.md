# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > no-ctor`

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
	loc: SourceLocation experimental/class-properties/no-ctor/input.js 1:0-4:0
	path: UIDPath<experimental/class-properties/no-ctor/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Classes may not have a non-static field named 'constructor'"}
			}
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:13
				path: UIDPath<experimental/class-properties/no-ctor/input.js>
				start: Position 2:2
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: SourceLocation experimental/class-properties/no-ctor/input.js 1:6-1:9 (Foo)
			}
			loc: SourceLocation experimental/class-properties/no-ctor/input.js 1:0-3:1
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation experimental/class-properties/no-ctor/input.js 1:0-3:1
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "constructor"
								loc: SourceLocation experimental/class-properties/no-ctor/input.js 2:2-2:13 (constructor)
							}
							loc: SourceLocation experimental/class-properties/no-ctor/input.js 2:2-2:13
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: SourceLocation experimental/class-properties/no-ctor/input.js 2:2-2:13
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							loc: SourceLocation experimental/class-properties/no-ctor/input.js 2:2-2:13
							start: Position 2:2
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

 experimental/class-properties/no-ctor/input.js:2:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Classes may not have a non-static field named 'constructor'

    1 │ class Foo {
  > 2 │   constructor
      │   ^^^^^^^^^^^
    3 │ }


```
