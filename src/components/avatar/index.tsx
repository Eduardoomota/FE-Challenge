import * as S from "./avatar.styles";

type AvatarProps = {
  imageSrc: string;
  name?: string;
  role?: string;
  size?: "sm" | "md" | "lg";
  isCarousel?: boolean;
};

const Avatar = ({
  imageSrc,
  name,
  role,
  size = "md",
  isCarousel = false,
}: AvatarProps) => {
  return (
    <S.UserCard
      isCarousel={isCarousel}
      data-is-carousel={isCarousel ? "true" : undefined}
    >
      <S.Avatar size={size}>
        <img src={imageSrc} alt={name || ""} />
      </S.Avatar>
      {name ? <S.Name>{name}</S.Name> : null}
      {role ? <S.Role>{role}</S.Role> : null}
    </S.UserCard>
  );
};

export default Avatar;
