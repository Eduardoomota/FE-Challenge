import styled from "styled-components";

export const ExpenseStatisticsContainer = styled.div`
  h2 {
    margin: 4px 0 18px;
    font-size: 22px;
  }
`;

export const ChartWrapper = styled.div`
  width: 360px;
  height: 332px;
  background-color: #fff;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`;
