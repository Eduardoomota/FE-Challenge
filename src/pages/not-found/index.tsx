import { useNavigate } from "react-router-dom";
import * as S from "./not-found.styles";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Box>
      <img src="/404.jpg" alt="404" />
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </S.Box>
  );
};

export default NotFound;
