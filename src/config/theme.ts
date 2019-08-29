import { DefaultTheme } from 'styled-components';

const spacingUnit = 10;

const spacing = {
  xs: `${spacingUnit / 2}px`,
  sm: `${spacingUnit}px`,
  md: `${spacingUnit * 2}px`,
  lg: `${spacingUnit * 3}px`,
  xl: `${spacingUnit * 6}px`,
};

const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1000,
};

const colors = {
  white: '#FFFFFF',
  offWhite: '#E5D9D9',
  text: '#2c2c2c',
};

const font = {
  family:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  weight: {
    normal: 400,
    bold: 700,
    black: 900,
  },
  size: {
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
  },
};

// styped-system theme
const fontSizes = Object.keys(font.size).map(key => font.size[key]);
const space = ['0px', ...Object.keys(spacing).map(key => spacing[key])];

export const theme: DefaultTheme = {
  colors,
  font,
  fontSizes,
  spacing,
  breakpoints,
  space,
};
