import * as S from "./balance.styles";

const Balance: React.FC = () => {
  return (
    <S.BalanceContent>
      <h2>Balance History</h2>
      <img src="/balance.png" alt="Balance icon" />
    </S.BalanceContent>
  );
};

export default Balance;
