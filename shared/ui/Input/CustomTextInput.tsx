import { TextInput } from '@mantine/core';
import React from 'react';
import { InputType } from '../../../types/input';
import { TextInputStyled } from './CustomTextInput.Styled';

export const CustomTextInput = ({
  placeholder,
  label,
  radius,
  size,
  required,
  className,
  icon,
}: InputType) => {
  return (
    <TextInputStyled
      placeholder={placeholder}
      label={label}
      radius={radius}
      size={size}
      required={required}
      icon={icon}
      className={className}
    />
  );
};
