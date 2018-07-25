import React, {Component} from 'react';
import PropTypes from 'prop-types';

import StyledRoundButton from './RoundButton.styles';

export default class RoundButton extends Component {
  static propTypes = {
    /** Sets type of button */
    kind: PropTypes.string,

    /** Sets raised state */
    raised: PropTypes.bool,

    /** Sets dense state */
    dense: PropTypes.bool,

    /** Sets icon */
    iconName: PropTypes.string,

    /** Sets disable state */
    disabled: PropTypes.bool,

    /** Sets additional CSS classes */
    className: PropTypes.string,

    /** Sets icon position (after,before) */
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    kind: 'normal',
  };

  render() {
    const {
      iconName,
      kind,
      disabled,
      raised,
      dense,
      className,
      onClick,
    } = this.props;
    return (
      <StyledRoundButton
        onClick={onClick}
        kind={kind}
        raised={raised}
        dense={dense}
        disabled={disabled}
        iconName={iconName}
        className={className}
      >
        <StyledRoundButton.Icon
          name={iconName}
          kind={kind}
          disabled={disabled}
          iconName={iconName}
        />
      </StyledRoundButton>
    );
  }
}
