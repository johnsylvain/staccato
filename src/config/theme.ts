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

const color = {
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
    sm: '10px',
    md: '14px',
    lg: '20px',
  },
};

export const theme: DefaultTheme = {
  color,
  font,
  spacing,
  breakpoints,
};
