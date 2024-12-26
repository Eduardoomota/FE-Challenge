import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useStore } from "./store";
import { useCallback } from "react";
import React from "react";
import Avatar from "components/avatar";
import * as S from "./header.styles";
import { HeaderProps } from "types";

const Header = ({ title }: HeaderProps) => {
  const { toggleSidebar, sidebarOpen } = useStore();

  const handleToggleSidebar = useCallback(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  return (
    <>
      <S.Header>
        <S.BtnMenuHamburger onClick={handleToggleSidebar}>
          {sidebarOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </S.BtnMenuHamburger>

        <h1>{title}</h1>

        <S.Box>
          <S.SearchBox>
            <S.SearchIcon />
            <S.Input type="text" placeholder="Search for something" />
          </S.SearchBox>
          <S.IconWrapper>
            <IoSettingsOutline color="#718EBF" size={20} />
          </S.IconWrapper>

          <S.IconWrapper>
            <IoNotificationsOutline color="#396aff" size={20} />
            <S.NotificationBadge />
          </S.IconWrapper>

          <Avatar imageSrc="/lorem-2.png" size="sm" />
        </S.Box>
      </S.Header>
      <S.SearchContainer>
        <S.SearchBox>
          <S.SearchIcon />
          <S.Input type="text" placeholder="Search for something" />
        </S.SearchBox>
      </S.SearchContainer>
    </>
  );
};

export default React.memo(Header);
