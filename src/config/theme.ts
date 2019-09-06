import { DefaultTheme } from 'styled-components';

const spacingUnit = 10;

const spacing = {
  xs: `${spacingUnit / 2}px`,
  sm: `${spacingUnit}px`,
  md: `${spacingUnit * 2}px`,
  lg: `${spacingUnit * 3}px`,
  xl: `${spacingUnit * 6}px`,
};

const breakpoint = {
  sm: 480,
  md: 768,
  lg: 1000,
};

const colors = {
  white: '#FBFAF9',
  offWhite: '#E5D9D9',
  seagreen: '#eef3e1',
  text: '#2c2c2c',
  subtext: '#6d6d6d',
  spotify: '#1DB954',
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
const breakpoints = Object.keys(breakpoint).map(key => breakpoint[key] + 'px');

export const theme: DefaultTheme = {
  colors,
  font,
  fontSizes,
  spacing,
  breakpoints,
  breakpoint,
  space,
};
