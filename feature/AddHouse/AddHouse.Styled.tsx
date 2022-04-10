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
    border: 1px solid red;
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    .left-side {
      /* background-color: #16ae5871; */
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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
      width: 100%;
      background-color: #a116ae70;
    }
  }
`;
