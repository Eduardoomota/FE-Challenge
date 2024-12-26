import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
`;

export const ChartWrapper = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 332px;

  @media (max-width: 992px) {
    height: 254px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  text-align: left;
  margin: 4px 0 18px;

  @media (max-width: 992px) {
    margin: 15px 0;
  }
`;
