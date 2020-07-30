# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `react/noAccessStateInSetState`

### `0`

```

 lint/react/noAccessStateInSetState/reject/1/file.tsx:2:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown class property start

    1 │ class MyComponent extends Component {
  > 2 │   function increment() {
      │            ^
    3 │     this.setState({value: this.state.value + 1});
    4 │   }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```javascript
undefined
```

### `1`

```

 lint/react/noAccessStateInSetState/reject/2/file.tsx:2:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown class property start

    1 │ class MyComponent extends Component {
  > 2 │   function increment() {
      │            ^
    3 │     this.setState({value: 1 + this.state.value});
    4 │   }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```javascript
undefined
```

### `2`

```

 lint/react/noAccessStateInSetState/reject/3/file.tsx:2:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown class property start

    1 │ class MyComponent extends Component {
  > 2 │   function toggle() {
      │            ^
    3 │     this.setState({
    4 │       value: !this.state.value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```javascript
undefined
```

### `3`

```

 lint/react/noAccessStateInSetState/reject/4/file.tsx:2:10 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown class property start

    1 │ class MyComponent extends Component {
  > 2 │   function toggle() {
      │            ^
    3 │     this.setState({
    4 │       value: !!this.state.value

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```javascript
undefined
```

### `4`

```

 lint/react/noAccessStateInSetState/reject/5/file.tsx:3:2 lint/react/noAccessStateInSetState ━━━━━━━

  ✖ Avoid using this.state within a this.setState call.

    1 │ class MyComponent extends Component {
    2 │   update() {
  > 3 │     this.setState({
      │     ^^^^^^^^^^^^^^^
  > 4 │       foo: bar,
  > 5 │       value: 1 + this.state.value
  > 6 │     });
      │ ^^^^^^
    7 │   }
    8 │ }

  ℹ Batched state calls could result in unexpected errors due to stale state data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
class MyComponent extends Component {
	update() {
		this.setState({
			foo: bar,
			value: 1 + this.state.value,
		});
	}
}

```

### `5`

```

 lint/react/noAccessStateInSetState/reject/6/file.tsx:3:2 lint/react/noAccessStateInSetState ━━━━━━━

  ✖ Avoid using this.state within a this.setState call.

    1 │ class MyComponent extends Component {
    2 │   update() {
  > 3 │     this.setState({
      │     ^^^^^^^^^^^^^^^
  > 4 │       foo: bar,
  > 5 │       value: this.state.value + 1
  > 6 │     });
      │ ^^^^^^
    7 │   }
    8 │ }

  ℹ Batched state calls could result in unexpected errors due to stale state data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
class MyComponent extends Component {
	update() {
		this.setState({
			foo: bar,
			value: this.state.value + 1,
		});
	}
}

```

### `6`

```

 lint/react/noAccessStateInSetState/reject/7/file.tsx:3:2 lint/react/noAccessStateInSetState ━━━━━━━

  ✖ Avoid using this.state within a this.setState call.

    1 │ class MyComponent extends Component {
    2 │   update() {
  > 3 │     this.setState({
      │     ^^^^^^^^^^^^^^^
  > 4 │       value: this.state.value
  > 5 │     });
      │ ^^^^^^
    6 │   }
    7 │ }

  ℹ Batched state calls could result in unexpected errors due to stale state data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
class MyComponent extends Component {
	update() {
		this.setState({
			value: this.state.value,
		});
	}
}

```

### `7`

```

 lint/react/noAccessStateInSetState/reject/8/file.tsx:3:2 lint/react/noAccessStateInSetState ━━━━━━━

  ✖ Avoid using this.state within a this.setState call.

    1 │ class MyComponent extends Component {
    2 │   update() {
  > 3 │     this.setState({
      │     ^^^^^^^^^^^^^^^
  > 4 │       foo: bar,
  > 5 │       value: this.state.value
  > 6 │     });
      │ ^^^^^^
    7 │   }
    8 │ }

  ℹ Batched state calls could result in unexpected errors due to stale state data.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `7: formatted`

```
class MyComponent extends Component {
	update() {
		this.setState({
			foo: bar,
			value: this.state.value,
		});
	}
}

```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```
class MyComponent extends Component {
	update() {
		this.setState({
			foo: bar,
		});
	}
}

```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```
class MyComponent extends Component {
	increment() {
		this.setState((prevState) => ({value: prevState.value + 1}));
	}
}

```