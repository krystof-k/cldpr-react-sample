## Examples

#### Default

```jsx
class PaginationExample extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePerPageChange = this.handlePerPageChange.bind(this);

    this.state = {
      currentPage: 1,
      perPage: 10
    };
  }

  handlePageChange(e) {
    this.setState({ currentPage: e });
  }

  handlePerPageChange(e) {
    const perPage = e.target.value;

    this.setState({
      currentPage: 1,
      perPage: Number(perPage)
    });
  }

  render() {
    const { currentPage, perPage } = this.state;

    return (
      <Pagination
        currentPage={currentPage}
        onPageChange={this.handlePageChange}
        onPerPageChange={this.handlePerPageChange}
        perPage={perPage}
        totalItems={100}
      />
    );
  }
}

<PaginationExample />;
```

#### First page

```jsx
<Pagination currentPage={1} perPage={10} totalItems={250} />
```

#### 2nd page

```jsx
<Pagination currentPage={2} perPage={10} totalItems={250} />
```

#### 3rd page

```jsx
<Pagination currentPage={3} perPage={10} totalItems={250} />
```

#### 4th page

```jsx
<Pagination currentPage={4} perPage={10} totalItems={250} />
```

#### 5th page

```jsx
<Pagination currentPage={5} perPage={10} totalItems={250} />
```

#### 6th page

```jsx
<Pagination currentPage={6} perPage={10} totalItems={250} />
```

#### N-5th page

```jsx
<Pagination currentPage={20} perPage={10} totalItems={250} />
```

#### N-4th page

```jsx
<Pagination currentPage={21} perPage={10} totalItems={250} />
```

#### N-3th page

```jsx
<Pagination currentPage={22} perPage={10} totalItems={250} />
```

#### N-2th page

```jsx
<Pagination currentPage={23} perPage={10} totalItems={250} />
```

#### N-1th page

```jsx
<Pagination currentPage={24} perPage={10} totalItems={250} />
```

#### Last page

```jsx
<Pagination currentPage={25} perPage={10} totalItems={250} />
```
