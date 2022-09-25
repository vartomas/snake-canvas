import 'styled-components';

interface Palette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Palette;
  }
}
