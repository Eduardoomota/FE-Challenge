import styled from "styled-components";

export const SidebarItem = styled.li<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px 20px 15px 40px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  gap: 10px;
  color: ${({ isSelected }) => (isSelected ? "#333" : "#b1b1b1")};

  &:hover {
    color: #333;
  }

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    width: ${({ isSelected }) => (isSelected ? "4px" : "0")};
    background: black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 4px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
