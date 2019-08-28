import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      offWhite: string;
      text: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    breakpoints: {
      sm: number;
      md: number;
      lg: number;
    };

    font: {
      family: string;

      weight: {
        normal: number;
        bold: number;
        black: number;
      };

      size: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
