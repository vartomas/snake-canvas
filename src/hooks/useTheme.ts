import React, { createContext, useState, useContext, createElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { defaultTheme, Theme } from '../utils/theme';

export interface Value {
  currentTheme: Theme;
  changeTheme?: (theme: Theme) => void;
}

const themeContext = createContext<Value | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<Theme>(defaultTheme);

  return createElement(
    themeContext.Provider,
    { value: { currentTheme: state, changeTheme: setState } },
    createElement(StyledThemeProvider, { theme: state }, children)
  );
};

export const useTheme = () => useContext(themeContext) ?? { currentTheme: defaultTheme };
