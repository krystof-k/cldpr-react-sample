import styled from 'styled-components';
import {space} from 'styled-system';

import TextComponent from '../../../components/texts/Text';
import RoundButtonComponent from '../../../components/form/RoundButton';

import {size} from '../../../tokens';

const Button = styled(RoundButtonComponent)`
  float: left;
  opacity: 0;
`;

const Element = styled.div`
  display: inline-block;
  width: ${size('roundbutton.size')};
  height: ${size('roundbutton.size')};
`;

const ElementBefore = styled(Element)`
  position: absolute;
  top: 12px;
  left: -${size('roundButton.size')};
`;

const ElementAfter = styled(Element)``;

const Heading = styled.div`
  position: relative;
  display: inline-block;
  width: auto;

  &:hover ${Button} {
    opacity: 1;
  }

  ${space};
`;

const Text = styled(TextComponent).attrs({
  textStyle: 'heading',
  tag: 'h1',
})``;

Heading.Text = Text;
Heading.ElementBefore = ElementBefore;
Heading.Button = Button;
Heading.ElementAfter = ElementAfter;

export default Heading;
