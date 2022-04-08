import React from 'react';
import CustomLink from '../../ui/Link';
import { Palette } from 'tabler-icons-react';

export const CustomNavbar = () => {
  return (
    <div>
      <CustomLink href="/" hrefName="Home">
        <Palette size={21} strokeWidth={1.5} />
      </CustomLink>
      <CustomLink href="/about" hrefName="About">
        <Palette size={21} strokeWidth={1.5} />
      </CustomLink>
    </div>
  );
};
