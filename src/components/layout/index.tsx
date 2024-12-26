import { LayoutProps } from "types";
import * as S from "./layout-styles";

const Layout = ({ children }: LayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default Layout;
