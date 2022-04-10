import styled from 'styled-components';

export const HouseCardConatiner = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 18rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .card-location {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
      font-size: 1.3rem;
    }
  }

  .card-location-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`;

export const ImgConatiner = styled.div`
  width: 100%;
  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grey400};
    margin-top: 0.2rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  .room-number-p {
    font-size: 1.3rem;
  }

  .room-title-p {
    font-size: 0.9rem;
    flex-wrap: wrap;
    font-weight: 400;
    display: inline-block;
    max-width: 17rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    display: flex;
    color: ${({ theme }) => theme.colors.textWhite};
    background-color: ${({ theme }) => theme.colors.grey900} !important;
  }

  .trash-icon {
    cursor: pointer;
  }
`;
