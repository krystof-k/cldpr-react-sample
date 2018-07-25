import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {List} from '../../../../../components';
import Page from '../Page';

import getPages from '../../utils/getPages';

export default class Numbers extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func,
    perPage: PropTypes.number,
    visibleInnerPages: PropTypes.number,
    totalItems: PropTypes.number,
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
    const onClickFirst = () => onPageChange(1);
    const onClickLast = () => onPageChange(pager.totalPages);

    return (
      <List gutter={0}>
        <Page isActive={pager.currentPage === 1} onClick={onClickFirst}>
          1
        </Page>

        <Page
          isEllipsis
          isHidden={pager.startPage === 1 || pager.startPage === 2}
        >
          &hellip;
        </Page>

        {pager.pages.map(page => {
          const onClickPage = () => onPageChange(page);

          return (
            <Page
              isActive={page === currentPage}
              isHidden={page === 1 || page === pager.totalPages}
              key={page}
              onClick={onClickPage}
            >
              {page}
            </Page>
          );
        })}

        <Page
          isEllipsis
          isHidden={
            pager.endPage === pager.totalPages ||
            pager.endPage === pager.totalPages - 1
          }
        >
          &hellip;
        </Page>

        <Page
          isActive={pager.currentPage === pager.totalPages}
          isHidden={pager.endPage === 1}
          onClick={onClickLast}
        >
          {pager.totalPages}
        </Page>
      </List>
    );
  }
}
