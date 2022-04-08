import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../shared/components/Layout';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';
import { SpotlightProvider } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';

export const AppProvider = ({ children }) => {
  const actions: SpotlightAction[] = [
    {
      title: 'Home',
      description: 'Get to home page',
      onTrigger: () => console.log('Home'),
    },
    {
      title: 'Dashboard',
      description: 'Get full information about current system status',
      onTrigger: () => console.log('Dashboard'),
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => console.log('Documentation'),
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <SpotlightProvider
        actions={actions}
        searchPlaceholder="Search..."
        shortcut="Ctrl + K"
        nothingFoundMessage="Nothing found..."
      >
        <GlobalStyle />
        <Layout>{children}</Layout>
      </SpotlightProvider>
    </ThemeProvider>
  );
};
