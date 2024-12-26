import styled from "styled-components";

export const Layout = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;

  @media (max-width: 992px) {
    margin-top: 100px;
    height: auto;
  }
`;
