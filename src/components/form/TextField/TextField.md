### Examples

The TextField is a [controlled input](https://reactjs.org/docs/forms.html#controlled-components). So, in order to see the value you are typing, you will have to use state for it.

#### Default:

```jsx
class TextFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {value: ''};
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return <TextField value={this.state.value} onChange={this.onChange} placeholder="Default example" />;
  }
}
<TextFieldExample />;
```

#### Default dense:

```jsx
<TextField dense value="Value" />
```

#### W/ placeholder:

```jsx
<TextField placeholder="Placeholder" />
```

#### Disabled:

```jsx
<TextField disabled value="Value" />
```

#### W/ error:

```jsx
<TextField error="Please type an email" value="Value" />
```

#### FullWidth:

```jsx
class TextFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {value: ''};
  }

  onChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return <TextField fullWidth value={this.state.value} onChange={this.onChange} placeholder="FullWidth example" />;
  }
}
<TextFieldExample />;
```

#### FullWidth dense:

```jsx
<TextField dense fullWidth value="Value" />
```
