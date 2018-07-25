import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Controls from './components/Controls';
import ItemsAmount from './components/ItemsAmount';
import ItemsPerPage from './components/ItemsPerPage';
import Numbers from './components/Numbers';
import StyledPagination from './Pagination.styles';

export default class Pagination extends Component {
  static propTypes = {
    /** Number of current page */
    currentPage: PropTypes.number,
    /** Number of items per page */
    perPage: PropTypes.number,
    /** Number of total items */
    totalItems: PropTypes.number,
    /** First and last page is excluded from the count. Also, this should be an odd number */
    visibleInnerPages: PropTypes.number,
    /** Handler for page change */
    onPageChange: PropTypes.func,
    /** Handler for ItemsPerPage change */
    onPerPageChange: PropTypes.func,
  };

  static defaultProps = {
    currentPage: 1,
    perPage: 20,
    visibleInnerPages: 7,
  };

  render() {
    const {
      currentPage,
      onPageChange,
      onPerPageChange,
      perPage,
      totalItems,
      visibleInnerPages,
    } = this.props;

    return (
      <StyledPagination>
        <StyledPagination.Left>
          <ItemsPerPage onPerPageChange={onPerPageChange} perPage={perPage} />
        </StyledPagination.Left>
        <StyledPagination.Content>
          <ItemsAmount
            currentPage={currentPage}
            perPage={perPage}
            totalItems={totalItems}
          />
        </StyledPagination.Content>
        <StyledPagination.Right>
          <StyledPagination.List>
            <StyledPagination.List.Item>
              <Numbers
                currentPage={currentPage}
                onPageChange={onPageChange}
                perPage={perPage}
                totalItems={totalItems}
                visibleInnerPages={visibleInnerPages}
              />
            </StyledPagination.List.Item>
            <StyledPagination.List.Item>
              <Controls
                currentPage={currentPage}
                onPageChange={onPageChange}
                perPage={perPage}
                totalItems={totalItems}
                visibleInnerPages={visibleInnerPages}
              />
            </StyledPagination.List.Item>
          </StyledPagination.List>
        </StyledPagination.Right>
      </StyledPagination>
    );
  }
}
