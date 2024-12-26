import styled from "styled-components";

export const ContainerMyCards = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 22px;
  }

  p {
    font-size: 17px;
    color: #343c6a;
    font-weight: bold;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0 20px 0;
  background-color: #f5f8fa;
  gap: 30px;

  @media (max-width: 992px) {
    width: 150%;
    padding: 20px 0 0 0;
  }
`;
