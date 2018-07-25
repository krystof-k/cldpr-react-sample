# Development guide

This guide presents:

- how to [set up](#step-by-step) & [run](#yarn-scripts-overview) the project
- project's [architecture & design](#architecture--design)
- how to run [tests](#tests), [styles](#code-style-checks) & [security](#security-checks) checks
- conventions & [best practices](#best-practices)

Please follow [contributing policy](CONTRIBUTING.md) for Git and GitHub rules and processes.

## Setup

### Step by step

1. Create a fork of this repository

2. Clone the repository

3. [Install Yarn](https://yarnpkg.com/en/docs/install) if you don't have it already

   _For macOS it's a good idea to install [Homebrew](https://brew.sh) package manager:_

   ```bash
   $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

   _and then run_ `brew install yarn`

4. Run `yarn install`

5. Wait for ages

6. Run `yarn styleguide` and open live-reloading [React Styleguidist](https://react-styleguidist.js.org) in the browser

### Yarn scripts overview

| command               | description                                                  |
| --------------------- | ------------------------------------------------------------ |
| yarn styleguide       | launches [React Styleguidist](https://react-styleguidist.js.org) for development |
| yarn styleguide:build | builds [React Styleguidist](https://react-styleguidist.js.org) static site |

## Architecture & design

### File structure

All components are placed in `./src/components` folder.

### Components structure

Each component is composed from those 3 or 4 files, depends on if it has only styles or functionality and styles, put in the `Component` folder:

- **`Component.js`**

  If component has something more than just styles, we add it here. If not, we add the whole component declaration here, including its styles.

- **`Component.styles.js`**

  If component has something more than just styles, we keep the styles in this file. If the component has more than just one Block ( from BEM methodology ), when we need to export the elements as a part of the block, for example:

  ```jsx
  const Parent = styled.div`
    position: relative;
  `;

  const Child = styled.div`
    position: absolute;
    top: 0;
    left: 0;
  `;

  Parent.Child = Child;

  /** @component */
  export default Parent;
  ```

  Note: As you noticed, I added a JSDom comment before exporting the component. This is to let react-docgen ( used by Styleguidist ) know that my component is a Styled Component and to know how to parse it.

- **`Component.md`**

  File used for rendering usage examples in [React Styleguidist](https://react-styleguidist.js.org): see [documentation](https://react-styleguidist.js.org/docs/documenting.html#usage-examples-and-readme-files)

- **`index.js`**

  Just a symlink file to `Component.js`. Usually, just this line:

  ```js
  export { default } from './Component';
  ```

E.g.:

```js
Card/
  Card.js
  Card.styles.js
  Card.md
  index.js
```

#### `Component.js`

Anatomy of the Component.js file is following:

```
[general imports]

[elements imports]

{

  [component proptypes]

  [component defaultprops]

  [component methods]

  [component render]

}
```

Elements are imported from the `Component.styles.js` file and are prefixed with `Styled`, so that it doesn't collide with the component itself. E.g.:

```javascript
import StyledCard from './Card.styles';
```

Each component should have defined its properties at the beginning of the class, e.g.:

```javascript
export default class Card extends Component {
  static propTypes = {
    /** Sets the background color */
    color: PropTypes.string,
    /** Sets an image as background */
    image: PropTypes.string
  };

  …  

}
```

Appropriate inline comments in [JSDoc](http://usejsdoc.org) format should be added in the way [React Styleguidist](https://react-styleguidist.js.org) [understands it](https://react-styleguidist.js.org/docs/documenting.html#code-comments-and-proptypes).

The overall file then may look e.g. like this:

```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledCard from './Card.styles';

export default class Card extends Component {
  static propTypes = {
    /** Sets the background color */
    color: PropTypes.string,
    /** Sets an image as background */
    image: PropTypes.string
  };

  render() {
    return (
      <StyledCard { ...this.props }>
        <StyledCard.Header>
          The card header here
        </StyledCard.Header>
        <StyledCard.Body>
          The card body here
        </StyledCard.Body>
      </StyledCard>
    )
  }
}
```

Note: Always use a class for your component if the component is not just styles. If your component doesn't re-render, use a PureComponent instead of a Component, to make it lighter.

## Utilities

Utilities are properties that are bind on components and allow them to behave a certain way in the environment they are used in. For example, margin. Margin allows spacing around a component when is used together with other components. For now, only utility available is `space`.

### Implementation

To allow your component to use spacing:

```js
import { space } from 'styled-system';

const Component = styled.div`
  // Custom CSS here
  position: relative;

  // Utility ( always at the end to make sure it overrides all previous styles )
  ${space};
`;
```

### Usage

```jsx
<Component mb={ 2 } />
```

## Design Tokens

Design Tokens are styles or group of styles that are defined over a more frendly name. Usually are a group of styles that commonly used together, for example:

```yaml
heading:
 font-size: 42px;
 line-height: 48px;
 text-transform: uppercase;
```

### Building a Design Token

Go to `config/tokens.js` and create a new function:

```js
const applyColor = (color) => css`
  ${color === 'primary' && css`
    color: ${color('blue')};
    fill: ${color('blue')};
  `};
`;
```

### Using a Design Token

```jsx
import { applyColor } from '../../config';

const Component = styled.div`
  ${applyColor('primary')};
`;  
```

## Tests & checks

### Security checks

Security checks are automatically conducted by [GitHub's security alerts](https://github.com/blog/2470-introducing-security-alerts-on-github). You can find the [dependency graph](https://github.com/cloudaper/react/network/dependencies) with eventual security alerts in the Insights tab.

## Best practices

### Articles to read

* [Styled Components with BEM](https://tech.decisiv.com/structuring-our-styled-components-part-i-2bf21fa64b28)
