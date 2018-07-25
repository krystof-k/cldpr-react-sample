import styled from 'styled-components';

import IconComponent from '../../../components/assets/Icon';

import {baseline} from '../../../config';

const Checkbox = styled.div`
  position: relative;
  display: inline-block;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  width: ${baseline(3)};
  height: ${baseline(3)};
`;

const Icon = styled(IconComponent)`
  outline: 0;
  fill: ${props => props.fill};
`;

const Input = styled.input`
  display: none;
`;

const Clickable = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
`;

Checkbox.Icon = Icon;
Checkbox.Input = Input;
Checkbox.Clickable = Clickable;

export default Checkbox;
