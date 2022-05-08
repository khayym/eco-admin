import { Avatar } from '@mantine/core';
import styled from 'styled-components';

interface TitleProps {
  size?: number;
  radius?: any;
  src?: string;
}

export const AvatarStyled = styled(Avatar)<TitleProps>`
  position: relative;

  img {
    width: fit-content;
  }
`;

export const AvatarDivConatiner = styled.div`
  position: relative;

  .pencil-icon {
    bottom: 0;
    color: ${({ theme }) => theme.colors.secondaryMain};
    left: 0.2rem;
    padding: 0.1rem;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    position: absolute !important;
    transition: all 0.2s ease-in-out 0s;

    :hover {
      cursor: pointer;

      background: ${({ theme }) => theme.colors.secondaryMain};
      color: ${({ theme }) => theme.colors.secondaryLight} !important;
    }
  }
`;
