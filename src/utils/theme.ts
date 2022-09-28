import { ColorPalette } from '../styled';

export interface Theme {
  name: 'Default' | 'Ami' | 'Sofi';
  color: ColorPalette;
  bgUrl: string;
}

const defaultTheme: Theme = {
  name: 'Default',
  color: {
    primary: '#0376be',
    primaryDark: '#1d3557',
    primaryLight: '#a8dadc',
    white: '#ffffff',
  },
  bgUrl: 'default-bg.jpg',
};

const amiTheme: Theme = {
  name: 'Ami',
  color: {
    primary: '#fff',
    primaryDark: '#fff',
    primaryLight: '#fff',
    white: '#ffffff',
  },
  bgUrl: '',
};

const sofiTheme: Theme = {
  name: 'Sofi',
  color: {
    primary: '#777',
    primaryDark: '#777',
    primaryLight: '#777',
    white: '#777',
  },
  bgUrl: '',
};

export { defaultTheme, amiTheme, sofiTheme };
