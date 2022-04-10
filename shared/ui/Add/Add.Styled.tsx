import styled from 'styled-components';

export const AddComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  cursor: pointer;
  border-radius: 8px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    background: ${({ theme }) => theme.colors.secondaryMain};

    .plus-icon {
      color: ${({ theme }) => theme.colors.secondaryLight} !important;
    }
  }

  .plus-icon {
    transition: all 0.2s ease-in-out 0s;
    color: ${({ theme }) => theme.colors.secondaryMain} !important;
  }
`;
