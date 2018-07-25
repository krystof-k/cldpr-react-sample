export const baselines = [
  '0px',
  '8px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '64px',
  '72px',
  '80px',
  '88px',
];

export const space = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

export const colors = {
  pink: '#ff28b1',

  'blue-brand': '#0c4084',

  'blue-dark': '#001221',
  'blue-dark-80': '#001a30',
  'blue-dark-60': '#002447',

  'blue-pale': '#0866d8',
  'blue-pale-80': '#1a8dff',
  'blue-pale-60': '#69c5f7',
  'blue-pale-40': '#b6e2ff',

  'blue-bright': '#00c3ff',
  'blue-bright-80': '#33cfff',
  'blue-bright-60': '#7fe1ff',
  'blue-bright-40': '#ccf3ff',

  black: '#000',
  'black-90': '#212121',
  'black-80': '#424242',
  'black-70': '#616161',
  'black-60': '#757575',
  'black-50': '#9e9e9e',
  'black-40': '#bdbdbd',
  'black-30': '#e0e0e0',
  'black-20': '#eee',
  'black-10': '#f5f5f5',
  'black-5': '#fafafa',

  white: '#fff',

  yellow: '#fdf841',
  'yellow-30': '#ded702',
  'yellow-40': '#bbb502',

  disabled: 'rgba(0, 0, 0, 0.3)',
  transparent: 'transparent',
  'red-error': '#f44336',

  'chip-idle-normal': '#e0e0e0',
  'chip-idle-hover': '#c4c4c4',
  'chip-idle-click': '#a6a6a6',
  'chip-focus-normal': '#757575',
  'chip-focus-hover': '#666',
  'chip-focus-click': '#565656',

  'chip-idle-icon-normal': '#666',
  'chip-idle-icon-hover': '#191919',
  'chip-focus-icon-normal': '#ababab',
  'chip-focus-icon-hover': '#fff',
  'chip-focus-icon-click': '#fff',
};

export const shadows = [
  'none',
  '0 0 1px 0 rgba(0,0,0,0.20),0 1px 1px 0 rgba(0,0,0,0.14),0 1px 2px 0 rgba(0,0,0,0.12)',
  '0 0 1px 0 rgba(0,0,0,0.20),0 2px 1px 0 rgba(0,0,0,0.14),0 1px 3px 0 rgba(0,0,0,0.12)',
  '0 1px 2px 0 rgba(0,0,0,0.20),0 3px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12)',
  '0 5px 5px -3px rgba(0,0,0,0.20),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)',
  `0 0 0 2px ${colors.pink} ,inset 0 0 0 1px white`,
  `0 0 0 2px ${colors.pink}`,
];

export const fontFamilies = {
  roboto: 'Roboto',
  'roboto-condensed': 'Roboto Condensed',
  'roboto-mono': 'Roboto Mono',
};

export const fontWeights = {
  light: 300,
  medium: 500,
  bold: 700,
};

export default {
  baselines,
  space,
  colors,
  shadows,
  fontFamilies,
  fontWeights,
};
