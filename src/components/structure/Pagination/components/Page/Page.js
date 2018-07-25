import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List} from '../../../../../components';
import StyledPage from './Page.styles';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node,
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isEllipsis: PropTypes.bool,
    isHidden: PropTypes.bool,
    onClick: PropTypes.func,
  };

  render() {
    const {
      children,
      isActive,
      isHidden,
      isEllipsis,
      isDisabled,
      onClick,
    } = this.props;
    const enabledOnClick = isActive ? null : onClick;

    if (isHidden) {
      return null;
    }

    return (
      <List.Item>
        <StyledPage
          isActive={isActive}
          isDisabled={isDisabled}
          isEllipsis={isEllipsis}
          onClick={enabledOnClick}
        >
          {children}
        </StyledPage>
      </List.Item>
    );
  }
}
