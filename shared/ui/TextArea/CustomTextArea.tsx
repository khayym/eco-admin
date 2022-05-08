import React from 'react';
import { TextareaTypes } from '../../../types/textarea';
import { CustomTextAreaStyled } from './CustomTextArea.Styled';

export const CustomTextArea = ({
  placeholder,
  label,
  minRows,
  required,
  className,
  radius,
  maxRows,
}: TextareaTypes) => {
  return (
    <CustomTextAreaStyled
      className={className}
      placeholder={placeholder}
      label={label}
      minRows={minRows}
      maxRows={maxRows}
      required={required}
      radius={radius}
    />
  );
};
