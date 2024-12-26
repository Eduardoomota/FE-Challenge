import React, { memo, useMemo } from "react";
import { SiMastercard } from "react-icons/si";
import { FcSimCardChip } from "react-icons/fc";

import * as S from "./card.styles";
import { CardComponentProps } from "types";

const Card = memo(
  ({
    isDark = false,
    balance = "0.00",
    cardHolder = "Unknown",
    validThru = "MM/YY",
    cardNumber = "**** **** **** ****",
  }: CardComponentProps) => {
    const dynamicStyles = useMemo(() => ({ isDark }), [isDark]);

    return (
      <S.CardWrapper {...dynamicStyles}>
        <S.CardHeader {...dynamicStyles}>
          <S.Balance {...dynamicStyles}>
            <span>Balance:</span>
            <span>{balance}</span>
          </S.Balance>
          <FcSimCardChip size={30} aria-label="SIM Card Chip" />
        </S.CardHeader>
        <S.CardBody {...dynamicStyles}>
          <div>
            <span>CARD HOLDER</span>
            <span>{cardHolder}</span>
          </div>
          <div>
            <span>VALID THRU</span>
            <span>{validThru}</span>
          </div>
        </S.CardBody>
        <S.CardFooter>
          <S.CardNumber>{cardNumber}</S.CardNumber>
          <SiMastercard size={30} aria-label="Mastercard Logo" />
        </S.CardFooter>
      </S.CardWrapper>
    );
  }
);

export default Card;
