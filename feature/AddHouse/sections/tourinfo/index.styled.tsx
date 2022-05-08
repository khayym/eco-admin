import styled from 'styled-components';

export const HouseInfoStyledContainer = styled.div`
  .header {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  .house-info-body {
  }
`;

export const PriceTitle = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 505px) {
    flex-direction: column;
  }
`;
