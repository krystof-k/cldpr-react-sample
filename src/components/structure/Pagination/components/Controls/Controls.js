import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {RoundButton} from '../../../../../components';
import StyledControls from './Controls.styles';

import getPages from '../../utils/getPages';

export default class Controls extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func,
    perPage: PropTypes.number,
    totalItems: PropTypes.number,
    visibleInnerPages: PropTypes.number,
  };

  render() {
    const {
      currentPage,
      onPageChange,
      perPage,
      totalItems,
      visibleInnerPages,
    } = this.props;

    const pager = getPages(totalItems, currentPage, perPage, visibleInnerPages);
    const onClickBack = () => onPageChange(pager.currentPage - 1);
    const onClickNext = () => onPageChange(pager.currentPage + 1);

    return (
      <StyledControls>
        {pager.currentPage !== 1 && (
          <RoundButton iconName="pagination.prev" onClick={onClickBack} />
        )}

        {currentPage !== pager.totalPages && (
          <RoundButton iconName="pagination.next" onClick={onClickNext} />
        )}
      </StyledControls>
    );
  }
}
