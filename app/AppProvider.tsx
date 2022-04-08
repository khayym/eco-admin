import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../shared/components/Layout';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
