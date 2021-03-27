import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBlue: string;
      lightBlue: string;
      orange: string;
      gray: string;
      lightGray: string;
    };

    fontSizes: {
      titleSize: string;
      xSmall: string;
      small: string;
      base: string;
      lg: string;
      xl: string;
    };
  }
}
