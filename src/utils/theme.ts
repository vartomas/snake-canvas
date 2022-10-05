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
    primary: '#a9927d',
    primaryDark: '#5e503f',
    primaryLight: '#f2f4f3',
    white: '#ffffff',
  },
  bgUrl: 'ami-bg.jpg',
};

const sofiTheme: Theme = {
  name: 'Sofi',
  color: {
    primary: '#c9184a',
    primaryDark: '#590d22',
    primaryLight: '#ffb3c1',
    white: '#ffffff',
  },
  bgUrl: 'sofi-bg.jpg',
};

export { defaultTheme, amiTheme, sofiTheme };
