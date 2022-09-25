import 'styled-components';

interface ColorPalette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorPalette;
  }
}
