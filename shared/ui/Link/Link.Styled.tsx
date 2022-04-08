import styled from 'styled-components';

interface LinkContainerProps {
  readonly theme?: any;
  readonly activeLink?: string;
}

export const LinkContainer = styled.div<LinkContainerProps>`
  margin: 0.2rem 0;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    padding: 15px 16px 15px 24px;
    border-radius: 12px;
    gap: 1rem;
    cursor: pointer;
    background-color: ${({ theme, activeLink }) =>
      activeLink === 'true'
        ? theme.colors.secondaryLight
        : theme.colors.textWhite};

    :hover {
      background-color: ${({ theme }) => theme.colors.secondaryLight};
      .link-text-span,
      .icon-span {
        color: ${({ theme }) => theme.colors.secondaryDark};
      }
    }

    .icon-span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme, activeLink }) =>
        activeLink === 'true'
          ? theme.colors.secondaryDark
          : theme.colors.grey700};
    }

    .link-text-span {
      color: ${({ theme, activeLink }) =>
        activeLink === 'true'
          ? theme.colors.secondaryDark
          : theme.colors.grey700};
    }
  }
`;
