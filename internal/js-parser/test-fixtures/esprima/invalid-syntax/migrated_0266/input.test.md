# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0266`

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
	loc: SourceLocation esprima/invalid-syntax/migrated_0266/input.js 1:0-2:0
	path: UIDPath<esprima/invalid-syntax/migrated_0266/input.js>
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: SourceLocation esprima/invalid-syntax/migrated_0266/input.js 1:6-1:7 (A)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0266/input.js 1:0-1:9
			meta: JSClassHead {
				body: Array []
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: SourceLocation esprima/invalid-syntax/migrated_0266/input.js 1:0-1:9
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:8
				path: UIDPath<esprima/invalid-syntax/migrated_0266/input.js>
				start: Position 1:8
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Unclosed <emphasis>class body</emphasis>"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "We expected to find the closing character <emphasis>}</emphasis> here"}
					}
					frame {location: SourceLocation esprima/invalid-syntax/migrated_0266/input.js 2:0-2:0}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0266/input.js:1:8 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed class body

    class A {
            ^

  ℹ We expected to find the closing character } here

    class A {


```
