import React from 'react';
import {
  CardBody,
  CardFooter,
  CardHeader,
  HouseCardConatiner,
  ImgConatiner,
} from './Houses.Styled';
import { Trash, MapPin, CurrencyDollar, Eye } from 'tabler-icons-react';
import { Button, Image } from '@mantine/core';
import { CardType } from '../../../../types/house';

export const HouseCard = ({ homes }: any) => {
  console.log(homes);
  return (
    <>
      {homes.map(
        (
          {
            location,
            viewConut,
            roomCount,
            releaseDate,
            roomInfo,
            bookingPrice,
          },
          i
        ) => (
          <HouseCardConatiner key={i}>
            <CardHeader>
              <div className="card-location">
                <MapPin size={32} strokeWidth={1.5} color={'black'} />
                <p>{location}</p>
              </div>
              <div className="card-location-right">
                <Eye size={16} strokeWidth={1.5} color={'black'} />
                <span>{viewConut}</span>
              </div>
            </CardHeader>

            <CardBody>
              <p className="room-number-p">{roomCount} otaq</p>
              <ImgConatiner>
                <Image
                  height={140}
                  fit="cover"
                  radius="md"
                  src="https://ecotourizm.com/Images/home_1/Gabala_3_yataq_otag_1.jpeg"
                  alt="Random unsplash image"
                />
                <p>{releaseDate}</p>
              </ImgConatiner>
              <p className="room-title-p">{roomInfo}</p>
            </CardBody>

            <CardFooter>
              <Button className="btn" radius="md">
                <CurrencyDollar size={20} strokeWidth={2} color={'#fff'} />
                <p>{bookingPrice}</p>
              </Button>
              <Trash
                size={22}
                strokeWidth={1.5}
                color={'black'}
                className="trash-icon"
              />
            </CardFooter>
          </HouseCardConatiner>
        )
      )}
    </>
  );
};
