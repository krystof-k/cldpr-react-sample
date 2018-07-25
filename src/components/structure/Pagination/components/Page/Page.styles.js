import styled from 'styled-components';

import {color} from '../../../../../config';

const getCursor = props => {
  if (props.isDisabled) {
    return 'not-allowed';
  }

  return (
    !props.isDisabled &&
    (props.isActive || props.isEllipsis ? 'default' : 'pointer')
  );
};

const Page = styled.span`
  color: ${props => props.isActive && color('black-90')};
  cursor: ${getCursor};
  display: inline-block;
  font-weight: ${props => props.isActive && 'bold'};
  min-width: 24px;
  padding-left: ${props => !props.isEllipsis && 1};
  padding-right: ${props => !props.isEllipsis && 1};
  text-align: center;

  &:hover {
    color: ${props => !props.isEllipsis && color('black-90')};
    font-weight: ${props => !props.isEllipsis && 'bold'};
  }
`;

export default Page;
