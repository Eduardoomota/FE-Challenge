import { memo } from "react";
import { SidebarItemProps } from "types";
import * as S from "./sidebar-item.styles";

const SidebarItem = ({ item, isSelected, onClick }: SidebarItemProps) => {
  return (
    <S.SidebarItem
      onClick={() => onClick(item.name, item.url)}
      isSelected={isSelected}
    >
      <S.IconWrapper>{item.icon}</S.IconWrapper>
      {item.name}
    </S.SidebarItem>
  );
};

export const MemoizedSidebarItem = memo(SidebarItem);
