import { NumberInput } from '@mantine/core';
import styled from 'styled-components';

export const StyledNumberInput = styled(NumberInput)`
  input {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    font-weight: 300;
  }

  label {
    font-size: 0.9rem;
  }

  .mantine-TextInput-required {
    display: none;
  }
`;
