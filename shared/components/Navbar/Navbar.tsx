import React from 'react';
import CustomLink from '../../ui/Link';
import { Palette } from 'tabler-icons-react';
import { routerCollection } from '../../constant/route';
import { RouterLinks } from '../../../types/navbar';

export const CustomNavbar = () => {
  const { main } = routerCollection;
  return (
    <div>
      {main.map(({ href, name, id }: RouterLinks) => (
        <CustomLink href={href} hrefName={name} key={id}>
          <Palette size={21} strokeWidth={1.5} />
        </CustomLink>
      ))}
    </div>
  );
};
