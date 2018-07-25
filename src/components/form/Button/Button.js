import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styles';

export default class Button extends Component {
  static Icon = StyledButton.Icon;

  static propTypes = {
    /** Sets children */
    children: PropTypes.node,

    /** Sets type of button */
    kind: PropTypes.string,

    /** Sets dense state */
    dense: PropTypes.bool,

    /** Sets raised state */
    raised: PropTypes.bool,

    /** Sets disable state */
    disabled: PropTypes.bool,

    /** Sets fullWidth state */
    fullWidth: PropTypes.bool,

    /** Sets icon */
    iconName: PropTypes.string,

    /** Sets icon position (after,before) */
    iconAfter: PropTypes.bool,

    /** Sets response to onClick event */
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    kind: 'normal',
    iconName: '',
  };

  render() {
    const {
      children,
      iconName,
      iconAfter,
      dense,
      disabled,
      kind,
      raised,
      fullWidth,
      onClick,
    } = this.props;
    const Icon = (
      <StyledButton.Icon
        name={iconName}
        iconName={iconName}
        iconAfter={iconAfter}
        dense={dense}
        kind={kind}
        raised={raised}
      />
    );

    return (
      <StyledButton
        onClick={onClick}
        iconName={iconName}
        iconAfter={iconAfter}
        dense={dense}
        disabled={disabled}
        raised={raised}
        kind={kind}
        fullWidth={fullWidth}
      >
        {iconName && !iconAfter && Icon}
        {children}
        {iconName && iconAfter && Icon}
      </StyledButton>
    );
  }
}
