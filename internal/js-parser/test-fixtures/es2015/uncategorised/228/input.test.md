# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 228`

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
	loc: SourceLocation es2015/uncategorised/228/input.js 1:0-1:49
	path: UIDPath<es2015/uncategorised/228/input.js>
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			location: Object {
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Position 1:38
				path: UIDPath<es2015/uncategorised/228/input.js>
				start: Position 1:37
			}
			description: Object {
				categoryValue: "js"
				category: Array ["parse"]
				message: RAW_MARKUP {value: "Argument <emphasis>t</emphasis> name clash in strict mode"}
				advice: Array [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {location: SourceLocation es2015/uncategorised/228/input.js 1:37-1:38 (t)}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation es2015/uncategorised/228/input.js 1:9-1:10 (a)
			}
			loc: SourceLocation es2015/uncategorised/228/input.js 1:0-1:49
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: SourceLocation es2015/uncategorised/228/input.js 1:10-1:12
			}
			body: JSBlockStatement {
				loc: SourceLocation es2015/uncategorised/228/input.js 1:13-1:49
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: SourceLocation es2015/uncategorised/228/input.js 1:15-1:28
					}
				]
				body: Array [
					JSExpressionStatement {
						loc: SourceLocation es2015/uncategorised/228/input.js 1:29-1:47
						expression: JSObjectExpression {
							loc: SourceLocation es2015/uncategorised/228/input.js 1:30-1:45
							properties: Array [
								JSObjectMethod {
									kind: "method"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "b"
											loc: SourceLocation es2015/uncategorised/228/input.js 1:32-1:33 (b)
										}
										loc: SourceLocation es2015/uncategorised/228/input.js 1:32-1:33
									}
									loc: SourceLocation es2015/uncategorised/228/input.js 1:32-1:43
									body: JSBlockStatement {
										body: Array []
										directives: Array []
										loc: SourceLocation es2015/uncategorised/228/input.js 1:40-1:43
									}
									head: JSFunctionHead {
										async: false
										generator: false
										hasHoistedVars: false
										rest: undefined
										returnType: undefined
										thisType: undefined
										typeParameters: undefined
										loc: SourceLocation es2015/uncategorised/228/input.js 1:33-1:39
										params: Array [
											JSBindingIdentifier {
												name: "t"
												loc: SourceLocation es2015/uncategorised/228/input.js 1:34-1:35 (t)
												meta: JSPatternMeta {
													optional: undefined
													typeAnnotation: undefined
													loc: SourceLocation es2015/uncategorised/228/input.js 1:34-1:35
												}
											}
											JSBindingIdentifier {
												name: "t"
												loc: SourceLocation es2015/uncategorised/228/input.js 1:37-1:38 (t)
												meta: JSPatternMeta {
													optional: undefined
													typeAnnotation: undefined
													loc: SourceLocation es2015/uncategorised/228/input.js 1:37-1:38
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
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/228/input.js:1:37 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Argument t name clash in strict mode

  ℹ Defined already here

    function a() { "use strict"; ({ b(t, t) { } }); }
                                         ^


```
