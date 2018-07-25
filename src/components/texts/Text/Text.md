### Examples

Text component with default text:

```jsx
<Text>A default text in span tag</Text>
```
A paragraph with highlighted and muted style parts:

```jsx
<Text tag="p">A paragraph with <Text highlighted>highlighted</Text> and <Text muted>muted</Text> styles.</Text>
```

Text component with engaged style part:

```jsx
<Text>Text with <Text engaged>engaged</Text> style</Text>
```

Text component with highlighted style and engaged style part:

```jsx
<Text highlighted>Text with <Text engaged>engaged</Text> style</Text>
```

Text component with a different typography token:

```jsx
<Text textStyle="button">Text with button token</Text>
```
