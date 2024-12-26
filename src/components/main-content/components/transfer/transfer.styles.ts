import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 24px;
  margin: 24px 0px 20px;
  color: #333;
`;

export const Box = styled.div`
  background-color: #fff;
  height: 276px;
  width: 445px;
  border-radius: 22px;

  .slick-slider {
    width: 394px;
    margin: 0 auto;
  }

  .slick-next {
    &:before {
      display: none;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const UserCard = styled.div`
  text-align: center;
  padding-top: 35px;
  width: 85px !important;
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #0f62fe;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 10px 0 5px;
`;

export const Role = styled.p`
  color: #666;
  font-size: 14px;
`;

export const TransferContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px 10px;

  > p {
    color: #718ebf;
  }
`;

export const TransferActions = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f5f9;
  border-radius: 30px;
  padding: 0;
  justify-content: space-between;
  width: 265px;
  height: 50px;

  @media (max-width: 992px) {
    width: 187px;
  }
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #718ebf;
  text-align: right;
  outline: none;
  width: 60px;
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  width: 125px;
  height: 50px;
  border-radius: 50px;
  margin-left: 0.5rem;
  cursor: pointer;
  gap: 10px;
  transition: all 0.3s;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #333333;
  }

  @media (max-width: 992px) {
    width: 100px;
  }
`;
