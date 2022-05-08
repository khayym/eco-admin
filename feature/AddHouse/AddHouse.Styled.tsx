import styled from 'styled-components';

export const AddHouseStyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.textWhite};
  height: 100%;
  border-radius: 12px;
  padding: 1rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grey400};
    font-weight: 500;
  }

  .add-house-main {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    .left-side {
      width: 100%;
      display: flex;
      flex-direction: column;

      .left-center {
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
      }
    }

    .right-side {
      display: flex;
      justify-content: center !important;
      align-items: center;
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      border-radius: 10px;
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

      input {
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
        font-weight: 300;
      }

      label {
        font-size: 0.9rem;
      }

      .mantine-NumberInput-required {
        display: none;
      }
    }

    .gender-class {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      gap: 1rem;

      .mantine-NumberInput-icon {
        font-weight: 200;
        font-size: 0.9rem;
        line-height: 1rem;
      }
    }

    /* --media-- */

    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
`;
