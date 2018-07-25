import styled from 'styled-components';

const Svg = styled.svg``;

const Icon = styled.span`
  display: inline-block;
  width: ${props => (props.large ? '48px' : '24px')};
  height: ${props => (props.large ? '48px' : '24px')};
  vertical-align: middle;

  & > ${Svg} {
    width: ${props => (props.large ? '48px' : '24px')};
    height: ${props => (props.large ? '48px' : '24px')};
    display: block;
  }
`;

Icon.Svg = Svg;

/** @component */
export default Icon;
