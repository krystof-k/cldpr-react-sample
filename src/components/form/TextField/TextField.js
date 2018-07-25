import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledTextField from './TextField.styles';

export default class TextField extends Component {
  static propTypes = {
    /** Sets type to the input */
    type: PropTypes.string,
    /** Sets a value to the input  */
    value: PropTypes.string,
    /** Sets a placeholder to the input  */
    placeholder: PropTypes.string,
    /** Sets field to error state */
    error: PropTypes.string,
    /** Sets label to the field */
    label: PropTypes.string,
    /** Sets hint to the field */
    hint: PropTypes.string,
    /** Sets the field to disabled mode */
    disabled: PropTypes.bool,
    /** Sets the field to full width mode */
    fullWidth: PropTypes.bool,
    /** Sets the field to dense mode */
    dense: PropTypes.bool,
    /** Callback triggered when a change happens  */
    onChange: PropTypes.func,
    /** Callback triggered when the field is focused  */
    onFocus: PropTypes.func,
    /** Callback triggered when the field is blured  */
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    type: 'text',
    value: '',
  };

  constructor(props) {
    super(props);

    this.setInputRef = this.setInputRef.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);

    this.state = {
      focus: false,
    };
  }

  setInputRef(component) {
    this.input = component;
  }

  focusInput() {
    if (this.input) {
      this.input.focus();
    }
  }

  onFocus() {
    const {disabled, onFocus} = this.props;

    if (!disabled) {
      this.setState({focus: true});

      if (onFocus) {
        onFocus();
      }
    }
  }

  onBlur() {
    const {disabled, onBlur} = this.props;

    if (!disabled) {
      this.setState({focus: false});

      if (onBlur) {
        onBlur();
      }
    }
  }

  render() {
    const {focus} = this.state;
    const {
      dense,
      disabled,
      error,
      fullWidth,
      label,
      onChange,
      placeholder,
      type,
      value,
      ...props
    } = this.props;

    const placeholderText = (focus || !label) && placeholder;

    return (
      <StyledTextField
        focus={focus}
        fullWidth={fullWidth}
        onClick={this.focusInput}
        {...props}
      >
        <StyledTextField.Input
          dense={dense}
          disabled={disabled}
          error={error}
          focus={focus}
          fullWidth={fullWidth}
          innerRef={this.setInputRef}
          onBlur={this.onBlur}
          onChange={onChange}
          onFocus={this.onFocus}
          placeholder={placeholderText}
          type={type}
          value={value}
        />
      </StyledTextField>
    );
  }
}
