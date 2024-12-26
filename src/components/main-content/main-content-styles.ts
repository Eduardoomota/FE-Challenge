import styled from "styled-components";

export const MainContent = styled.div`
  height: 100vh;
  width: calc(100% - 250px);
  background-color: #f5f7fa;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`;
