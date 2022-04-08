import React from 'react';
import HouseCard from '../../shared/ui/Cards/House';
import { HousesLayout } from './Houses.Styled';

const homes = [
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
  {
    location: 'Quba',
    viewConut: 441,
    roomCount: 3,
    releaseDate: '12 Dec 2022',
    roomInfo:
      'Qəbələ şəhərində modern dizaynda dağ mənzərəli villa Evin çox geniş və rahatdır həmçinin geniş həyəti var',
    bookingPrice: 230,
  },
];

export const HousesConatiner = () => {
  return (
    <HousesLayout>
      <HouseCard homes={homes} />
    </HousesLayout>
  );
};
