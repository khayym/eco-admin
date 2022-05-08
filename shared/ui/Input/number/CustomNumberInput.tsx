import React from 'react';
import { NumberInputType } from '../../../../types/input';
import { StyledNumberInput } from './CustomNumberInput.Styled';

export const CustomNumberInput = ({
  label,
  placeholder,
  max,
  min,
  defaultValue,
  icon,
  hideControls,
  size,
  className,
  radius,
}: NumberInputType) => {
  return (
    <StyledNumberInput
      label={label}
      placeholder={placeholder}
      defaultValue={defaultValue}
      min={min}
      max={max}
      radius={radius}
      icon={icon}
      hideControls={hideControls}
      size={size}
      className={className}
    />
  );
};
