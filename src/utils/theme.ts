import { ColorPalette } from '../styled';

export interface Theme {
  color: ColorPalette;
  bgUrl: string;
}

const defaultTheme: Theme = {
  color: {
    primary: '#0376be',
    primaryDark: '#1d3557',
    primaryLight: '#a8dadc',
    white: '#ffffff',
  },
  bgUrl: 'default-bg.jpg',
};

const amiTheme: Theme = {
  color: {
    primary: '#fff',
    primaryDark: '#fff',
    primaryLight: '#fff',
    white: '#ffffff',
  },
  bgUrl: '',
};

const sofiTheme: Theme = {
  color: {
    primary: '#777',
    primaryDark: '#777',
    primaryLight: '#777',
    white: '#777',
  },
  bgUrl: '',
};

export { defaultTheme, amiTheme, sofiTheme };
