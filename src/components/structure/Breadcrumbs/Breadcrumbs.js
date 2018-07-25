import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Icon} from '../../../components';

import StyledBreadcrumbs from './Breadcrumbs.styles';

export default class Breadcrumbs extends Component {
  static Item = StyledBreadcrumbs.Item;

  static propTypes = {
    showFirstArrow: PropTypes.bool,
    showLastArrow: PropTypes.bool,
    children: PropTypes.node,
  };

  renderChildren = () => {
    const {children, showFirstArrow, showLastArrow} = this.props;

    return React.Children.map(children, (child, index) => {
      const lastChildIndex = children.length - 1;

      const firstArrow = showFirstArrow && index === 0;
      const middleArrowBefore =
        (!showLastArrow || index !== lastChildIndex) && index !== 0;
      const middleArrowAfter = showLastArrow && index !== lastChildIndex;
      const lastArrow = showLastArrow && index === lastChildIndex;

      const arrow = <Icon name="breadcrumbs.arrow" />;

      return (
        <StyledBreadcrumbs.Wrapper>
          {firstArrow && arrow}
          {middleArrowBefore && arrow}
          {child}
          {middleArrowAfter && arrow}
          {lastArrow && arrow}
        </StyledBreadcrumbs.Wrapper>
      );
    });
  };

  render() {
    return (
      <StyledBreadcrumbs {...this.props}>
        {this.renderChildren()}
      </StyledBreadcrumbs>
    );
  }
}
