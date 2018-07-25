import {colors, baselines, shadows, fontFamilies, fontWeights} from './theme';

const matchFlexAlign = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
};

export const color = name => colors[name];
export const spacing = size => baselines[size];
export const baseline = size => baselines[size];
export const shadow = size => shadows[size];
export const align = direction => matchFlexAlign[direction];
export const fontFamily = family => fontFamilies[family];
export const fontWeight = weight => fontWeights[weight];
