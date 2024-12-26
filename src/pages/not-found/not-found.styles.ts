import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 500px;
    margin-bottom: 30px;
  }

  button {
    background: #333;
    width: 200px;
    text-align: center;
    height: 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    border-radius: 15px;
    cursor: pointer;
  }
`;
