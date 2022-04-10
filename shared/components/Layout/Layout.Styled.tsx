import styled from 'styled-components';
import { Grid } from '@mantine/core';

export const Layoutcontainer = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  height: 100%;
  border-radius: 12px;
  flex-wrap: nowrap;
  padding: 1rem 1rem 2rem 1rem;

  .page-title {
    p {
      border-left: 1px solid #000;
      padding-left: 1rem;
      font-size: 1.5rem;
    }

    .arrow-icon {
      width: 3rem;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.secondaryDark};
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      height: 1.5rem;
      border-radius: 1rem;
      transition: all 0.2s ease-in-out 0s;

      :hover {
        background: ${({ theme }) => theme.colors.secondaryMain};
        color: ${({ theme }) => theme.colors.secondaryLight} !important;
      }
    }
    height: 4rem;
    border-radius: 12px;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    margin-bottom: 1rem;
    box-shadow: rgba(201, 201, 210, 0.05) 0px 4px 16px,
      rgba(226, 226, 238, 0.05) 0px 8px 32px;
  }
`;
