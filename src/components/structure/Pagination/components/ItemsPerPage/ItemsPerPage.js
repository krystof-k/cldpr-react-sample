import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledInput from './ItemsPerPage.styles';

export default class ItemsPerPage extends Component {
  static propTypes = {
    onPerPageChange: PropTypes.func,
    perPage: PropTypes.number,
  };

  render() {
    const {onPerPageChange, perPage} = this.props;

    return (
      <div>
        <StyledInput dense onChange={onPerPageChange} value={String(perPage)} />{' '}
        items per page
      </div>
    );
  }
}
