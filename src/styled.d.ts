import 'styled-components';

export interface ColorPalette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorPalette;
    bgUrl: string;
  }
}
