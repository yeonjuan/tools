# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-named-export`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:0-3:0
	path: UIDPath<es2015/modules/duplicate-named-export/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 2:19
				path: UIDPath<es2015/modules/duplicate-named-export/input.js>
				start: Position 2:9
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "`foo` has already been exported. Exported identifiers must be unique."}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {location: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12}
				]
			}
		}
	]
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:0-1:15
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12 (foo)
					}
					local: JSReferenceIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 1:9-1:12 (foo)
					}
				}
			]
		}
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:0-2:22
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:9-2:19
					exported: JSIdentifier {
						name: "foo"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:16-2:19 (foo)
					}
					local: JSReferenceIdentifier {
						name: "bar"
						loc: SourceLocation es2015/modules/duplicate-named-export/input.js 2:9-2:12 (bar)
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```

 es2015/modules/duplicate-named-export/input.js:2:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ `foo` has already been exported. Exported identifiers must be unique.

    1 │ export { foo };
  > 2 │ export { bar as foo };
      │          ^^^^^^^^^^

  ℹ Defined already here

  > 1 │ export { foo };
      │          ^^^
    2 │ export { bar as foo };


```
