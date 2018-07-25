import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ItemsAmount extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    perPage: PropTypes.number,
    totalItems: PropTypes.number,
  };

  render() {
    const {currentPage, perPage, totalItems} = this.props;

    const start = (currentPage - 1) * perPage + 1;
    const lastPageTotal = currentPage * perPage;
    const end = totalItems < lastPageTotal ? totalItems : lastPageTotal;

    return (
      <div>
        {start}&ndash;{end} of {totalItems}
      </div>
    );
  }
}
