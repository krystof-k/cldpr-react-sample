### Examples

#### Button
```jsx
  <Button onClick={() => {}} >Button</Button>
```

#### Primary
```jsx
  <Button kind="primary" onClick={() => {}} >Button</Button>
```

#### Dense
```jsx
  <Button dense onClick={() => {}} >Button</Button>
```

#### Raised
```jsx
  <Button raised onClick={() => {}} >Button</Button>
```


#### Raised fullWidth
```jsx
  <Button raised fullWidth onClick={() => {}} >Button</Button>
```


#### Raised Primary
```jsx
  <Button raised kind="primary" onClick={() => {}} >Button</Button>
```

#### Disabled
```jsx
  <Button disabled onClick={() => {}} >Button</Button>
```

#### Disabled Raised
```jsx
  <Button disabled raised onClick={() => {}} >Button</Button>
```

#### Disabled Primary Raised
```jsx
  <Button disabled raised kind="primary" onClick={() => {}} >Button</Button>
```

#### With Icon
```jsx
  <Button kind="primary" iconName="x" onClick={() => {}} >Button</Button>
```

#### With Icon fullWidth
```jsx
  <Button kind="primary" fullWidth iconName="x" onClick={() => {}} >Button</Button>
```

#### With Icon After
```jsx
  <Button iconName="x" iconAfter onClick={() => {}}>Button</Button>
```

#### With Icon Raised
```jsx
  <Button raised kind="primary" iconName="x" onClick={() => {}} >Button</Button>
```

#### All buttons
```jsx
  <div>
    <Button onClick={() => {}} >Button  #1</Button>
    <Button raised onClick={() => {}} >Button #2</Button>
    <Button disabled raised onClick={() => {}} >Button  #3</Button>
    <Button kind="primary" iconName="x" onClick={() => {}} >Button #4</Button>
    <br/>
    <br/>
    <Button iconName="x" iconPos onClick={() => {}} >Button #5</Button>
    <Button raised kind="primary" iconName="x" onClick={() => {}}>Button #6</Button>
    <Button kind="primary" onClick={() => {}} >Button #7</Button>
    <Button dense onClick={() => {}} >Button #8</Button>
    <br/>
    <br/>
    <Button disabled onClick={() => {}} >Button #9</Button>
    <Button raised kind="primary" onClick={() => {}} >Button #10</Button>
    <Button disabled raised kind="primary" onClick={() => {}} >Button #11</Button>
    <Button iconAfter iconName="x" onClick={() => {}}>Button #12</Button>
  </div>
```
