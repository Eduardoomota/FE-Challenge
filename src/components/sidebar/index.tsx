import { FaClipboardCheck } from "react-icons/fa";
import { useState, useCallback, useMemo, useEffect } from "react";
import { MemoizedSidebarItem } from "./sidebar-item";
import * as S from "./sidebar.styles";
import { useStore } from "components/header/store";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarItems } from "./utils";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const { sidebarOpen } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const handleItemClick = useCallback(
    (name: string, url: string) => {
      setSelectedItem(name);
      navigate(`${url}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (isHomePage) {
      setSelectedItem(sidebarItems[0]?.name);
    }
  }, [isHomePage]);

  const memoizedSidebarItems = useMemo(
    () =>
      sidebarItems.map((item) => ({
        ...item,
        icon: <item.icon size={25} />,
      })),
    []
  );

  return (
    <S.Sidebar sidebarOpen={sidebarOpen}>
      <h2>
        <FaClipboardCheck />
        Soar Task
      </h2>
      <S.SidebarContainer>
        {memoizedSidebarItems.map((item) => (
          <MemoizedSidebarItem
            key={item.name}
            isSelected={selectedItem === item.name}
            onClick={handleItemClick}
            item={item}
          />
        ))}
      </S.SidebarContainer>
    </S.Sidebar>
  );
};

export default Sidebar;
