import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  width: 100% !important;
  align-items: center !important;

  h1 {
    font-size: 1.2rem;
  }

  .icon {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .setting-icon {
    color: ${({ theme }) => theme.colors.primaryMain};
  }
  .icon-admin {
    display: flex;
    background-color: yellow;
    justify-content: center;
    align-items: center;
    border-radius: 27px;
    transition: all 0.2s ease-in-out 0s;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    gap: 17px;
    width: 5.5rem;
    padding: 0.2rem 0;

    :hover {
      background-color: ${({ theme }) => theme.colors.primaryMain};

      .setting-icon {
        color: ${({ theme }) => theme.colors.primaryLight} !important;
      }
    }
  }

  .setting-icon {
    background-color: transparent !important;
  }

  .ring-icon-div {
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

      .ring-icon {
        color: ${({ theme }) => theme.colors.secondaryLight} !important;
      }
    }
  }

  .ring-icon {
    transition: all 0.2s ease-in-out 0s;
    color: ${({ theme }) => theme.colors.secondaryMain};
  }
`;
