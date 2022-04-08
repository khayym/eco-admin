import React from 'react';
import { Bell } from 'tabler-icons-react';
import { Settings } from 'tabler-icons-react';
import { HeaderContainer } from './Header.Styled';
import { Avatar, Group } from '@mantine/core';

export const CustomHeader = () => {
  return (
    <HeaderContainer>
      <h1>Eco</h1>
      <div className="icon">
        <div className="ring-icon-div">
          <Bell size={22} strokeWidth={1.5} className="ring-icon" />
        </div>
        <div className="icon-admin">
          <Avatar
            src="https://berrydashboard.io/free/static/media/user-round.13b5a31b.svg"
            alt="it's me"
            radius="xl"
            size="md"
          />
          <Settings size={24} strokeWidth={1.5} className="setting-icon" />
        </div>
      </div>
    </HeaderContainer>
  );
};
