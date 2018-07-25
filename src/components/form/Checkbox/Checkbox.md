### Examples

Checkbox:

```jsx
class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        onClick={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
<CheckboxExample />;
```

Checked Checkbox:

```jsx
class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }

  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        onClick={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
<CheckboxExample />;
```

Indeterminate Checkbox:

```jsx
class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: true };
  }

  render() {
    return (
      <Checkbox
        indeterminate={this.state.checked}
        checked={this.state.checked}
        onClick={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
<CheckboxExample />;
```

Disabled Checkbox:

```jsx
class CheckboxExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <Checkbox
        disabled={true}
        checked={this.state.checked}
        onClick={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
<CheckboxExample />;
```
