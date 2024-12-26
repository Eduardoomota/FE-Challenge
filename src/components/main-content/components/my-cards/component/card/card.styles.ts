import styled from "styled-components";
import { CardWrapperProps, ToggleButtonProps } from "types";

export const CardWrapper = styled.div<CardWrapperProps>`
  width: 350px;
  height: 235px;
  border-radius: 12px;
  background: ${(props) =>
    props.isDark
      ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
      : "#ffffff"};
  color: ${(props) => (props.isDark ? "#ffffff" : "#000000")};
  box-shadow: ${(props) =>
    props.isDark
      ? "0px 10px 20px rgba(0, 0, 0, 0.3)"
      : "0px 10px 20px rgba(0, 0, 0, 0.1)"};

  @media (max-width: 992px) {
    width: 265px;
    height: 170px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

export const CardHeader = styled.div<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  svg {
    path {
      fill: ${({ isDark }) => (isDark ? "white" : "black")};
    }
    g {
      fill: ${({ isDark }) => (isDark ? "white" : "black")};

      path {
        fill: ${({ isDark }) => (isDark ? "black" : "white")};
      }
    }
  }

  @media (max-width: 992px) {
    padding: 15px 20px;
  }
`;

export const Balance = styled.div<{ isDark: boolean }>`
  font-weight: bold;
  display: flex;
  flex-direction: column;

  span {
    &:nth-of-type(1) {
      font-size: 12px;
      margin-bottom: 4px;
      color: ${({ isDark }) => (isDark ? "#ffffffb2" : "#718EBF")};
    }

    &:nth-of-type(2) {
      font-size: 20px;
    }
  }

  @media (max-width: 992px) {
    span {
      &:nth-of-type(1) {
        font-size: 11px;
      }

      &:nth-of-type(2) {
        font-size: 16px;
      }
    }
  }
`;

export const CardBody = styled.div<{ isDark: boolean }>`
  font-size: 0.9em;
  line-height: 1.5;
  display: flex;
  gap: 72px;
  padding: 0 20px;
  margin-bottom: 36px;

  span {
    display: block;

    &:nth-of-type(1) {
      font-size: 12px;
      margin-bottom: 4px;
      color: ${({ isDark }) => (isDark ? "#ffffffb2" : "#718EBF")};
    }

    &:nth-of-type(2) {
      font-size: 16px;
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 5px;
    span {
      &:nth-of-type(1) {
        font-size: 10px;
      }

      &:nth-of-type(2) {
        font-size: 13px;
      }
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 70px;
  width: 100%;
  padding: 22px 26px;

  border-top: 1px solid #dfeaf2;

  @media (max-width: 992px) {
    height: 50px;
  }
`;

export const CardNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div<ToggleButtonProps>`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) => (props.isDark ? "#000" : "#ccc")};
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isDark ? "22px" : "2px")};
    transition: 0.3s;
  }
`;
