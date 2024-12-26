import styled from "styled-components";

export const BalanceContent = styled.div`
  width: 100%;

  h2 {
    margin: 24px 0px 20px;

    @media (max-width: 992px) {
      margin: 0 0 20px;
    }
  }

  @media (max-width: 992px) {
    width: 100%;

    img {
      width: 100%;
      height: 223px;
    }
  }
`;
