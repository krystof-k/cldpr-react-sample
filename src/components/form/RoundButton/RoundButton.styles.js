import styled from 'styled-components';

import IconComponent from '../../../components/assets/Icon';

import {baseline, align} from '../../../config';
import {buttonStyle, size} from '../../../tokens';

const StyledRoundButton = styled.button`
  padding: 4px;
  border-radius: ${props => (props.dense ? baseline(2) : '18px')};
  border-color: transparent;
  width: ${props => (props.dense ? baseline(4) : size('roundButton.size'))};
  height: ${props => (props.dense ? baseline(4) : size('roundButton.size'))};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  ${buttonStyle};
`;

const StyledIcon = styled(IconComponent)`
  white-space: nowrap;
  align-items: ${align('center')};
`;

StyledRoundButton.Icon = StyledIcon;

export default StyledRoundButton;
