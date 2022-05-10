import styled from 'styled-components';

export const HouseInfoStyledContainer = styled.div`
  .header {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  label {
    font-size: 0.9rem;
  }
  .multi-feature-select {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    font-weight: 300;
    font-size: 0.9rem;
  }
`;

export const PriceTitle = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 505px) {
    flex-direction: column;
  }
`;
