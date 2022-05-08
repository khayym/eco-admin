import { Avatar, Divider, NumberInput, Radio, RadioGroup } from '@mantine/core';
import React from 'react';
import { At } from 'tabler-icons-react';
import CustomAvatar from '../../shared/ui/Avatar';
import CustomTextInput from '../../shared/ui/Input';
import { AddHouseStyledContainer } from './AddHouse.Styled';
import { TourInfo } from './sections/tourinfo';

export const AddHouseConatiner = () => {
  return (
    <AddHouseStyledContainer>
      <h1>House information</h1>
      <p>
        Enter the required information below to register. You can change it
        anytime you want.
      </p>
      <div className="add-house-main">
        <div className="left-side">
          <div className="top">
            <CustomTextInput
              label="Email"
              placeholder="Your email"
              radius="md"
              size="md"
              required={true}
            />
          </div>
          <div className="left-center">
            <CustomTextInput
              label="Name"
              placeholder="Your name"
              radius="md"
              size="md"
              required={true}
            />

            <CustomTextInput
              label="Surname"
              placeholder="Your surname"
              radius="md"
              size="md"
              required={true}
            />
          </div>
        </div>

        {/* right-------------------- */}
        <div className="right-side">
          <CustomAvatar />
          <div className="gender-class">
            <NumberInput
              icon={'+994'}
              placeholder="55 000 00 00"
              label="Your phone"
              required
              radius="md"
              size="md"
              hideControls
            />
            <RadioGroup label="Gender" required>
              <Radio value="male" label="Male" />
              <Radio value="female" label="Female" />
            </RadioGroup>
          </div>
        </div>
      </div>
      <Divider my="sm" />
      <TourInfo />
    </AddHouseStyledContainer>
  );
};
