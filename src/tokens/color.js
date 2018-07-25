import {css} from 'styled-components';

import {color, fontFamily, shadow} from '../config';

export const buttonStyle = ({kind, disabled, raised}) => css`
  font-family: ${fontFamily('roboto-medium')};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  text-decoration: none;
  border: none;

  ${kind === 'normal' &&
    !disabled &&
    !raised &&
    css`
      color: ${color('black')};
      fill: ${color('black')};
      background-color: ${color('transparent')};
      box-shadow: ${shadow(0)};
      &:hover {
        background-color: ${color('black-30')};
      }
      &:active {
        background-color: ${color('black-40')};
      }
      &:focus {
        box-shadow: ${shadow(6)};
      }
    `};
  ${kind === 'normal' &&
    !disabled &&
    raised &&
    css`
      color: ${color('black')};
      fill: ${color('black')};
      background-color: ${color('transparent')};
      box-shadow: ${shadow(2)};
      &:hover {
        background-color: ${color('black-30')};
      }
      &:active {
        background-color: ${color('black-40')};
        box-shadow: ${shadow(4)};
      }
      &:focus {
        box-shadow: ${shadow(5)};
      }
    `};
  ${kind === 'normal' &&
    disabled &&
    !raised &&
    css`
      color: ${color('black-40')};
      fill: ${color('black-40')};
      background-color: ${color('transparent')};
    `};
  ${kind === 'normal' &&
    disabled &&
    raised &&
    css`
      color: ${color('black-40')};
      fill: ${color('black-40')};
      background-color: ${color('black-20')};
    `};

  ${kind === 'primary' &&
    !disabled &&
    !raised &&
    css`
      color: ${color('black')};
      fill: ${color('blue-pale')};
      background-color: ${color('white')};
      box-shadow: ${shadow(0)};
      &:hover {
        background-color: ${color('blue-pale-40')};
      }
      &:active {
        background-color: ${color('blue-pale-60')};
      }
      &:focus {
        box-shadow: ${shadow(6)};
      }
    `};

  ${kind === 'primary' &&
    !disabled &&
    raised &&
    css`
      color: ${color('white')};
      fill: ${color('white')};
      background-color: ${color('blue-pale')};
      box-shadow: ${shadow(2)};
      &:hover {
        background-color: ${color('blue-pale-60')};
      }
      &:active {
        background-color: ${color('blue-pale-80')};
        box-shadow: ${shadow(4)};
      }
      &:focus {
        box-shadow: ${shadow(5)};
      }
    `};
  ${kind === 'primary' &&
    disabled &&
    !raised &&
    css`
      fill: ${color('black-40')};
      background-color: ${color('transparent')};
    `};
  ${kind === 'primary' &&
    disabled &&
    raised &&
    css`
      color: ${color('black-40')};
      fill: ${color('black-40')};
      background-color: ${color('black-20')};
    `};
`;
