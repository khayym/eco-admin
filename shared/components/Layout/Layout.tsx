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
import { useRouter } from 'next/router';
import { ArrowNarrowLeft } from 'tabler-icons-react';

type Props = {
  children?: ReactNode;
};

export function Layout({ children }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { back, pathname } = useRouter();

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
      <Layoutcontainer>
        <div className="page-title">
          <ArrowNarrowLeft
            size={22}
            strokeWidth={1.5}
            className="arrow-icon"
            onClick={() => back()}
          />
          <p>{pathname} </p>
        </div>
        <div>{children}</div>
      </Layoutcontainer>
    </AppShell>
  );
}
