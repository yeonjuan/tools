# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `functions`

```javascript
CSSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	integrity: undefined
	loc: SourceLocation functions/input.css 1:0-8:1
	path: RelativePath<functions/input.css>
	body: Array [
		CSSRule {
			loc: SourceLocation functions/input.css 1:0-8:1
			prelude: Array [
				CSSSelector {
					loc: SourceLocation functions/input.css 1:0-1:7
					patterns: Array [
						CSSClassSelector {
							value: "style"
							loc: SourceLocation functions/input.css 1:0-1:6
						}
					]
				}
			]
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: CSSCustomProperty {
							value: "--fancy"
							loc: SourceLocation functions/input.css 2:1-2:1
						}
						value: Array [
							CSSDimension {
								value: 2
								unit: "px"
								loc: SourceLocation functions/input.css 2:10-2:13
							}
						]
						important: false
						loc: SourceLocation functions/input.css 2:1-2:13
					}
					CSSDeclaration {
						name: "border"
						value: Array [
							CSSVarFunction {
								name: "var"
								loc: SourceLocation functions/input.css 3:9-3:21
								params: Array [
									CSSCustomProperty {
										value: "--fancy"
										loc: SourceLocation functions/input.css 3:20-3:20
									}
								]
							}
						]
						important: false
						loc: SourceLocation functions/input.css 3:1-3:21
					}
					CSSDeclaration {
						name: "font-size"
						value: Array [
							CSSCalcFunction {
								name: "calc"
								loc: SourceLocation functions/input.css 4:17-4:29
								params: Array [
									CSSCalcSum {
										value: Array [
											CSSCalcProduct {
												value: Array [
													CSSCalcValue {
														value: CSSDimension {
															value: 10
															unit: "px"
															loc: SourceLocation functions/input.css 4:17-4:17
														}
														loc: SourceLocation functions/input.css 4:17-4:21
													}
												]
												loc: SourceLocation functions/input.css 4:21-4:22
											}
											CSSCalcOperation {
												value: "+"
												loc: SourceLocation functions/input.css 4:23-4:24
											}
											CSSCalcProduct {
												value: Array [
													CSSCalcValue {
														value: CSSDimension {
															value: 5
															unit: "rem"
															loc: SourceLocation functions/input.css 4:24-4:24
														}
														loc: SourceLocation functions/input.css 4:24-4:28
													}
												]
												loc: SourceLocation functions/input.css 4:28-4:28
											}
										]
										loc: SourceLocation functions/input.css 4:17-4:28
									}
								]
							}
						]
						important: false
						loc: SourceLocation functions/input.css 4:1-4:29
					}
					CSSDeclaration {
						name: "background"
						value: Array [
							CSSUrlFunction {
								name: "url"
								loc: SourceLocation functions/input.css 5:13-5:20
								params: Array [
									CSSString {
										value: ""
										loc: SourceLocation functions/input.css 5:17-5:19
									}
								]
							}
						]
						important: false
						loc: SourceLocation functions/input.css 5:1-5:20
					}
					CSSDeclaration {
						name: "background"
						value: Array [
							CSSUrlFunction {
								name: "url"
								loc: SourceLocation functions/input.css 6:13-6:29
								params: Array [
									CSSString {
										value: "something"
										loc: SourceLocation functions/input.css 6:17-6:28
									}
								]
							}
						]
						important: false
						loc: SourceLocation functions/input.css 6:1-6:29
					}
					CSSDeclaration {
						name: "background"
						value: Array [
							CSSUrlFunction {
								name: "url"
								loc: SourceLocation functions/input.css 7:13-7:31
								params: Array [
									CSSString {
										value: "./something"
										loc: SourceLocation functions/input.css 7:17-7:30
									}
								]
							}
						]
						important: false
						loc: SourceLocation functions/input.css 7:1-7:31
					}
				]
				startingTokenValue: "{"
				loc: SourceLocation functions/input.css 1:7-8:1
			}
		}
	]
}
```
