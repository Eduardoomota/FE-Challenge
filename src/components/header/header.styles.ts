import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const Header = styled.header`
  height: 100px;
  border-bottom: 1px solid #e6eff5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #fff;
  z-index: 1001;

  h1 {
    color: #343c6a;
    font-size: 28px;
  }

  @media (max-width: 992px) {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;

    border-bottom: none;

    > div {
      > div:nth-of-type(1),
      > div:nth-of-type(2),
      > div:nth-of-type(3) {
        display: none;
      }
    }
  }
`;

export const BtnMenuHamburger = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  transition: all 0.3s;

  svg {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  gap: 16px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #f5f7fa;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 50px;
  width: 255px;
`;

export const SearchIcon = styled(IoSearchOutline)`
  color: #9ca3af;
  margin-right: 8px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: #8ba3cb;
  background: transparent;
  &::placeholder {
    color: #8ba3cb;
  }
`;

export const IconWrapper = styled.div<{ hasNotifications?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #eef1f7;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 992px) {
    display: none;
  }

  &:hover {
    background-color: #e2e8f0;
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 13px;
  right: 16px;
  width: 10px;
  height: 10px;
  color: #396aff;
  border: 1px solid #396aff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  background: #eef1f7;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #34d399; /* Green border */
  object-fit: cover;
`;

export const SearchContainer = styled.div`
  display: none;

  @media (max-width: 992px) {
    background: white;
    display: flex;

    padding: 0 40px 20px;

    > div {
      height: 40px;
      width: 100%;
    }
  }
`;
