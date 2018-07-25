import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {mapStateToIcons} from './utils';

import {color} from '../../../config';

import StyledCheckbox from './Checkbox.styles';

export default class Checkbox extends Component {
  static propTypes = {
    /** Triggers callback when it gets clicked */
    onClick: PropTypes.func,

    /** Sets a CSS class to checkbox */
    className: PropTypes.string,

    /** Sets checkbox to checked mode */
    checked: PropTypes.bool,

    /** Sets checkbox to disabled mode */
    disabled: PropTypes.bool,

    /** Sets checkbox to indeterminate mode */
    indeterminate: PropTypes.bool,

    /** Sets checkbox to unfocusable mode */
    unfocusable: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      active: false,
      clicked: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onMouseOver() {
    this.setState({hover: true});
  }

  onMouseOut() {
    this.setState({hover: false, clicked: false});
  }

  onMouseUp() {
    this.setState({active: false});
  }

  onMouseDown() {
    this.setState({active: true});
  }

  handleClick(e) {
    const {disabled, onClick} = this.props;

    e.preventDefault();

    if (disabled) {
      return false;
    }

    this.setState({clicked: true});

    return onClick(e);
  }

  render() {
    const {active, hover, clicked} = this.state;
    const {
      checked,
      className,
      disabled,
      unfocusable,
      indeterminate,
    } = this.props;

    const fill = color(disabled ? 'black-20' : 'black-90');
    const tabIndex = disabled || unfocusable ? null : 0;

    const iconName = mapStateToIcons({
      active,
      hover,
      clicked,
      checked,
      disabled,
      indeterminate,
    });

    return (
      <StyledCheckbox className={className} disabled={disabled}>
        <StyledCheckbox.Clickable
          onClick={this.handleClick}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onMouseUp={this.onMouseUp}
          onMouseDown={this.onMouseDown}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        />
        <StyledCheckbox.Input
          type="checkbox"
          defaultChecked={checked}
          disabled={disabled}
        />
        <StyledCheckbox.Icon tabIndex={tabIndex} fill={fill} name={iconName} />
      </StyledCheckbox>
    );
  }
}
