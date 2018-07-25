import styled, {css} from 'styled-components';
import {space} from 'styled-system';

import {baseline, color} from '../../../config';
import {textStyle} from '../../../tokens';

const TextField = styled.div`
  background: ${props => props.fullWidth && color('white')};
  min-width: ${props => !props.fullWidth && '120px'};

  ${props => !props.fullWidth && space};
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${color('black-40')};
  }

  ${props =>
    !props.fullWidth &&
    css`
      border-bottom: 1px solid ${color('black-60')};
      height: ${props.dense ? '28px' : baseline(4)};
      margin: ${props.dense ? '0 0 4px' : '8px 0'};
      padding: ${props.dense ? '8px 0 6px' : '8px 0 7px'};

      &:hover {
        border-bottom-color: ${color('black-90')};
      }

      &:focus {
        padding-bottom: ${props.dense ? '5px' : '6px'};
      }

      &:focus,
      &:focus:hover {
        border-bottom: 2px solid ${color('blue-pale-80')};
      }

      ${props.disabled &&
        css`
          border-bottom-style: dashed;
        `};

      ${props.error &&
        css`
          &,
          &:hover,
          &:focus,
          &:focus:hover {
            border-bottom-color: ${color('red-error')};
          }
        `};
    `};

  ${props =>
    props.fullWidth &&
    css`
      height: ${props.dense ? baseline(6) : baseline(7)};
      padding: ${props.dense ? '16px' : '20px'} 0;
    `};

  ${textStyle({style: 'textFieldInput'})};
`;

TextField.Input = Input;

export default TextField;
