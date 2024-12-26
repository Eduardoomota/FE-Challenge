import MainContent from "components/main-content";
import Activity from "components/main-content/components/activity";
import Balance from "components/main-content/components/balance";
import ExpenseStatistics from "components/main-content/components/expense-statistics";
import MyCards from "components/main-content/components/my-cards";
import Transaction from "components/main-content/components/transaction";
import Transfer from "components/main-content/components/transfer";
import * as S from "./home.styles";

const Home = () => {
  return (
    <MainContent title="Overview">
      <S.Content>
        <S.Row>
          <MyCards />
          <Transaction />
        </S.Row>
        <S.Row>
          <Activity />
          <ExpenseStatistics />
        </S.Row>
        <S.Row>
          <Transfer />
          <Balance />
        </S.Row>
      </S.Content>
    </MainContent>
  );
};

export default Home;
