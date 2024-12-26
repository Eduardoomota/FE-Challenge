import Card from "./component/card";
import * as S from "./my-cards.styles";

const MyCards = () => {
  const cardsData = [
    {
      balance: "$5,756",
      cardHolder: "Eddy Cusuma",
      validThru: "12/22",
      cardNumber: "3778 **** **** 1234",
      isDark: true,
    },
    {
      balance: "$2,450",
      cardHolder: "Alice Johnson",
      validThru: "08/25",
      cardNumber: "5567 **** **** 7890",
      isDark: false,
    },
  ];

  return (
    <S.ContainerMyCards>
      <S.Title>
        <h2>My Cards</h2>
        <p>See All</p>
      </S.Title>
      <S.CardContainer>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            isDark={card.isDark}
            balance={card.balance}
            cardHolder={card.cardHolder}
            validThru={card.validThru}
            cardNumber={card.cardNumber}
          />
        ))}
      </S.CardContainer>
    </S.ContainerMyCards>
  );
};

export default MyCards;
