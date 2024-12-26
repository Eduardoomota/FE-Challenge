import styled from "styled-components";

export const Content = styled.div`
  padding: 24px 40px 150px;
  display: flex;
  justify-content: center;
  flex-flow: wrap row;
  overflow-y: auto;
  height: 100%;

  @media (max-width: 992px) {
    padding: 24px 20px 50px;
    overflow: hidden;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 30px;
  width: 1110px;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;
