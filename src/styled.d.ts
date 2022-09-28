import 'styled-components';

export interface ColorPalette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'Default' | 'Ami' | 'Sofi';
    color: ColorPalette;
    bgUrl: string;
  }
}
