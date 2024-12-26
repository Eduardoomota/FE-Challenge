import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding-top: 35px;

  @media (max-width: 992px) {
    max-width: 370px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const UserCardContainer = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  max-width: 105%;
`;

export const CarouselButton = styled.button`
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 58px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 4px 4px 18px -2px #e7e4e8cc;
  transition: all 0.3s;

  svg {
    fill: #718ebf;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;
