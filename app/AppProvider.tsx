import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
