# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/useAriaProps`

### `0`

```

 lint/jsx-a11y/useAriaProps/reject/1/file.jsx:1:20 lint/jsx-a11y/useAriaProps  FIXABLE  ━━━━━━━━━━━━

  ✖ aria-labell is an invalid ARIA attribute.

    <input className='' aria-labell='' />
                        ^^^^^^^^^^^^^^

  Suggested fix: ARIA Spelling Mistake

  - aria-labell=""
  + aria-label=""

  ℹ


```

### `0: formatted`

```jsx
<input className="" aria-labell="" />;

```

### `1`

```

 lint/jsx-a11y/useAriaProps/reject/2/file.jsx:1:5 lint/jsx-a11y/useAriaProps ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ aria- is an invalid ARIA attribute.

    <div aria-='foobar' />
         ^^^^^^^^^^^^^^


```

### `1: formatted`

```jsx
<div aria-="foobar" />;

```

### `2`

```

 lint/jsx-a11y/useAriaProps/reject/3/file.jsx:1:5 lint/jsx-a11y/useAriaProps  FIXABLE  ━━━━━━━━━━━━━

  ✖ aria-labeledby is an invalid ARIA attribute.

    <div aria-labeledby='foobar' />
         ^^^^^^^^^^^^^^^^^^^^^^^

  Suggested fix: ARIA Spelling Mistake

  - aria-labeledby="foobar"
  + aria-labelledby="foobar"

  ℹ


```

### `2: formatted`

```jsx
<div aria-labeledby="foobar" />;

```

### `3`

```

 lint/jsx-a11y/useAriaProps/reject/4/file.jsx:1:5 lint/jsx-a11y/useAriaProps ━━━━━━━━━━━━━━━━━━━━━━━

  ✖ aria-skldjfaria-klajsd is an invalid ARIA attribute.

    <div aria-skldjfaria-klajsd='foobar' />
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


```

### `3: formatted`

```jsx
<div aria-skldjfaria-klajsd="foobar" />;

```

### `4`

```

```

### `4: formatted`

```jsx
<div />;

```

### `5`

```

```

### `5: formatted`

```jsx
<div />;

```

### `6`

```

```

### `6: formatted`

```jsx
<div aria="wee" />;

```

### `7`

```

```

### `7: formatted`

```jsx
<div abcARIAdef="true" />;

```

### `8`

```

```

### `8: formatted`

```jsx
<div fooaria-foobar="true" />;

```

### `9`

```

```

### `9: formatted`

```jsx
<div fooaria-hidden="true" />;

```

### `10`

```

```

### `10: formatted`

```jsx
<input type="text" aria-errormessage="foobar" />;

```
