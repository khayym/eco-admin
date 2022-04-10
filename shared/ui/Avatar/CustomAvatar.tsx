import React from 'react';
import { Pencil } from 'tabler-icons-react';
import { AvatarDivConatiner, AvatarStyled } from './CustomAvatar.Styled';

export const CustomAvatar = () => {
  return (
    <AvatarDivConatiner>
      <AvatarStyled
        size={124}
        radius="xl"
        src="https://berrydashboard.io/free/static/media/user-round.13b5a31b.svg"
      />
      <Pencil size={30} strokeWidth={1} className="pencil-icon" />
    </AvatarDivConatiner>
  );
};
