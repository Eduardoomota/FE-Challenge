import styled from "styled-components";

export const Sidebar = styled.aside<{ sidebarOpen: boolean }>`
  width: 250px;
  border-right: 1px solid #e6eff5;
  height: 100%;
  background-color: white;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

  transform: translateX(0);

  @media (max-width: 992px) {
    position: fixed;
    top: 100px;
    width: 100%;
    z-index: 1000;
    background: white;

    transform: ${({ sidebarOpen }) =>
      sidebarOpen ? "translateX(0)" : "translateX(-100vw)"};
    opacity: ${({ sidebarOpen }) => (sidebarOpen ? "1" : "0")};
    pointer-events: ${({ sidebarOpen }) => (sidebarOpen ? "auto" : "none")};
  }

  h2 {
    padding: 40px 40px 0;
    gap: 10px;
    display: flex;
  }
`;

export const SidebarContainer = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  margin-right: 15px;
`;
