import Header from "components/header";
import { MainContentProps } from "types";
import * as S from "./main-content-styles";

const MainContent = ({ children, title }: MainContentProps) => {
  return (
    <S.MainContent>
      <Header title={title} />
      {children}
    </S.MainContent>
  );
};

export default MainContent;
