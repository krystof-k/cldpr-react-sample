import styled from 'styled-components';

import IconComponent from '../../../components/assets/Icon';

import {baseline, align} from '../../../config';
import {buttonStyle} from '../../../tokens';

const Button = styled.button`
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: ${props =>
    (props.iconName && !props.iconAfter ? '12px' : baseline(2))};
  padding-right: ${props =>
    (props.iconName && props.iconAfter ? '12px' : baseline(2))};
  align-items: ${align('center')};
  border-radius: 2px;
  line-height: ${props => (props.dense ? baseline(4) : '36px')};
  min-width: ${baseline(11)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  display: inline-flex;
  justify-content: center;

  ${buttonStyle};
`;

const Icon = styled(IconComponent)`
  white-space: nowrap;
  align-items: ${align('center')};
  margin-left: ${props =>
    (props.iconName && props.iconAfter ? '4px' : baseline(0))};
  margin-right: ${props =>
    (props.iconName && !props.iconAfter ? '4px' : baseline(0))};
`;

Button.Icon = Icon;

export default Button;
