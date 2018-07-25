import React, {Component} from 'react';
import PropTypes from 'prop-types';
import icons from 'cloudaper-icons';

import {iconName as getIconName} from '../../../tokens';

import StyledIcon from './Icon.styles';

export default class Icon extends Component {
  static propTypes = {
    /** Sets type of icon */
    name: PropTypes.string.isRequired,

    /** Sets size of icon */
    large: PropTypes.bool,
  };

  render() {
    const {name, large, ...props} = this.props;
    const iconName = getIconName(name) || name;
    const path = icons[iconName];
    const size = large ? '48px' : '24px';

    return (
      <StyledIcon large={large} {...props}>
        <StyledIcon.Svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentcolor"
        >
          <path d={path} />
        </StyledIcon.Svg>
      </StyledIcon>
    );
  }
}
