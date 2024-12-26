import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import * as S from "./transaction.styles";

interface TransactionItemProps {
  icon: JSX.Element;
  description: string;
  date: string;
  amount: string;
  isPositive: boolean;
}

const Transaction = () => {
  const transactions: TransactionItemProps[] = [
    {
      icon: <FaCreditCard size={20} color="#FFA500" />,
      description: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      isPositive: false,
    },
    {
      icon: <FaPaypal size={20} color="#0070BA" />,
      description: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      isPositive: true,
    },
    {
      icon: <RiMoneyDollarCircleLine size={30} color="#00C4B4" />,
      description: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      isPositive: true,
    },
  ];

  return (
    <S.Container>
      <S.Title>Recent Transaction</S.Title>
      <S.TransactionList>
        {transactions.map((transaction, index) => (
          <S.TransactionItem key={index}>
            <S.IconContainer>{transaction.icon}</S.IconContainer>
            <S.InfoContainer>
              <S.Description>{transaction.description}</S.Description>
              <S.Date>{transaction.date}</S.Date>
            </S.InfoContainer>
            <S.Amount isPositive={transaction.isPositive}>
              {transaction.amount}
            </S.Amount>
          </S.TransactionItem>
        ))}
      </S.TransactionList>
    </S.Container>
  );
};

export default Transaction;
