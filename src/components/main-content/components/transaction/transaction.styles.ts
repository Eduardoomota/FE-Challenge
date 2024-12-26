import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  background-color: #f5f8fa;
  border-radius: 12px;
  padding: 0;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #1a1a1a;
`;

export const TransactionList = styled.ul`
  list-style: none;
  padding: 25px 25px 15px;
  margin: 0;
  background-color: #ffffff;
  border-radius: 25px;
  height: 235px;

  li:nth-of-type(1) > div:nth-of-type(1) {
    background-color: #fff5d9;
  }

  li:nth-of-type(2) > div:nth-of-type(1) {
    background-color: #e7edff;
  }

  li:nth-of-type(3) > div:nth-of-type(1) {
    background-color: #dcfaf8;
  }
`;

export const TransactionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 0;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f5f8fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const InfoContainer = styled.div`
  flex: 1;

  div {
    font-size: 16px;

    &:nth-of-type(2) {
      margin-top: 6px;
      color: #718ebf;
      font-size: 15px;
    }
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333333;
`;

export const Date = styled.div`
  font-size: 0.8rem;
  color: #888888;
`;

export const Amount = styled.div<{ isPositive: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.isPositive ? "#3CB371" : "#FF6347")};
`;
