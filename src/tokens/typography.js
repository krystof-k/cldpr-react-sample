import {css} from 'styled-components';

import {baseline, color, shadow, fontFamily, fontWeight} from '../config';

export const textStyle = ({
  style,
  highlighted,
  muted,
  clickable,
  disabled,
  engaged,
}) => css`
  font-family: ${fontFamily('roboto')};
  font-size: 16px;
  line-height: ${baseline(4)};
  color: ${color('black-90')};

  ${(typeof style === 'undefined' || style === 'body') &&
    css`
      ${highlighted &&
        css`
          font-weight: ${fontWeight('medium')};
        `};

      ${muted &&
        css`
          color: ${color('black-60')};
        `};

      ${clickable &&
        css`
          font-weight: ${fontWeight('bold')};

          ${!disabled &&
            css`
              &:hover {
                color: ${color('blue-bright')};
              }

              &:active {
                color: ${color('blue-bright')};
                text-decoration: underline;
              }

              &:focus {
                box-shadow: ${shadow(6)};
              }
            `};

          ${disabled &&
            css`
              color: ${color('black-30')};
            `};
        `};

      ${engaged &&
        css`
          font-style: italic;
        `};
    `};

  ${style === 'button' &&
    css`
      font-size: 14px;
      text-transform: uppercase;

      ${disabled &&
        css`
          color: ${color('black-30')};
        `};
    `};

  ${style === 'heading' &&
    css`
      font-size: 48px;
      line-height: ${baseline(8)};
    `};

  ${style === 'pagination' &&
    css`
      font-size: 13px;
      line-height: unset;
    `};

  ${style === 'textFieldInput' &&
    css`
      font-size: ${props =>
        (props.dense && !props.fullWidth ? '13px' : '16px')};
      line-height: ${props =>
        (props.dense && !props.fullWidth ? '13px' : '16px')};
      color: ${props =>
        props.disabled && !props.fullWidth && color('black-30')};
    `};

  ${style === 'tableBodyCell' &&
    css`
      font-size: 13px;
    `};

  ${style === 'tableHeadCell' &&
    css`
      font-size: 13px;
      line-height: ${baseline(5)};
      font-weight: ${props =>
        (props.sorted ? fontWeight('bold') : fontWeight('medium'))};
    `};

  ${style === 'panel' &&
    css`
      font-size: 12px;
      line-height: unset;
    `};

  ${style === 'tree' &&
    css`
      font-size: 14px;
      line-height: ${baseline(3)};

      ${disabled &&
        css`
          color: ${color('black-30')};
        `};
    `};
`;
