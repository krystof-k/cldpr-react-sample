import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

import {textStyle} from '../../../tokens';

const e = React.createElement;

const tags = ['p', 'span', 'h1'];
const textStyles = ['body', 'button', 'heading'];

const Text = styled(({tag, children, ...props}) => e(tag, props, children))`
  ${props =>
    css`
      ${textStyle({
        style: props.textStyle,
        highlighted: props.highlighted,
        muted: props.muted,
        engaged: props.engaged,
      })};
    `};
`;

Text.propTypes = {
  /** Sets a HTML tag */
  tag: PropTypes.oneOf(tags),

  /** Sets the allowed typography design token */
  textStyle: PropTypes.oneOf(textStyles),

  /** Sets the highlighted style */
  highlighted: PropTypes.bool,

  /** Sets the muted style */
  muted: PropTypes.bool,

  /** Sets the engaged style (state) */
  engaged: PropTypes.bool,

  /** Overrides the token color */
  color: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  textStyle: 'body',
};

/** @component */
export default Text;
