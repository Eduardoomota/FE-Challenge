import React, { useState, useCallback, useMemo } from "react";
import { CarouselProps } from "types";
import { MdKeyboardArrowRight } from "react-icons/md";
import Avatar from "components/avatar";
import * as S from "./carousel.styles";

const Carousel: React.FC<CarouselProps> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= users.length - 3 ? 0 : prevIndex + 1
    );
  }, [users.length]);

  const translateXStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * (100 / 3)}%)`,
    }),
    [currentIndex]
  );

  return (
    <S.CarouselContainer>
      <S.CarouselWrapper>
        <S.UserCardContainer style={translateXStyle}>
          {users.map((user) => (
            <Avatar
              imageSrc={user.avatar}
              name={user.name}
              role={user.role}
              isCarousel
            />
          ))}
        </S.UserCardContainer>
      </S.CarouselWrapper>
      <S.CarouselButton onClick={handleNext}>
        <MdKeyboardArrowRight size={30} />
      </S.CarouselButton>
    </S.CarouselContainer>
  );
};

export default React.memo(Carousel);
