import styled from 'styled-components';

export const HousesLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 2rem;
  column-gap: 1rem;

  @media (max-width: 858px) {
    justify-content: center;
  }
`;
