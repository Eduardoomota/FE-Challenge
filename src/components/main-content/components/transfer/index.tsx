import React from "react";
import { FiSend } from "react-icons/fi";
import Carousel from "components/carousel";
import { users } from "./utils";
import * as S from "./transfer.styles";

const Transfer: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Quick Transfer</S.Title>

      <S.Box>
        <Carousel users={users} />

        <S.TransferContent>
          <p>Write Amount</p>
          <S.TransferActions>
            <S.Input type="text" placeholder="0.00" />
            <S.SendButton>
              <span>Send</span>
              <FiSend /> {/* Send Icon from React Icons */}
            </S.SendButton>
          </S.TransferActions>
        </S.TransferContent>
      </S.Box>
    </S.Container>
  );
};

export default Transfer;
