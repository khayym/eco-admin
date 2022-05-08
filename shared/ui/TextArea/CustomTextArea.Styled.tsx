import styled from 'styled-components';
import { Textarea } from '@mantine/core';

export const CustomTextAreaStyled = styled(Textarea)`
  textarea {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .mantine-Textarea-required {
    display: none;
  }
`;
