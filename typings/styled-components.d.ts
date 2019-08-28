import 'styled-components';
import { Theme } from 'styled-system';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
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

    space: string[];

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
        xl: string;
      };
    };
  }
}
