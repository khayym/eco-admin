import React, { ReactNode, useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import CustomNavbar from '../Navbar';
import CustomHeader from '../Header';
import { Layoutcontainer } from './Layout.Styled';

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          style={{ borderRight: '0px' }}
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 250 }}
        >
          <CustomNavbar />
        </Navbar>
      }
      header={
        <Header height={80} p="md" style={{ borderBottom: '0px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <CustomHeader />
          </div>
        </Header>
      }
    >
      <Layoutcontainer>{children}</Layoutcontainer>
    </AppShell>
  );
}
