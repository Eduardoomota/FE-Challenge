import styled from "styled-components";

export const UserCard = styled.div<{ isCarousel: boolean }>`
  flex: ${({ isCarousel }) => (isCarousel ? "0 0 28%" : "0")};
  text-align: center;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 992px) {
    flex: 0 0 26%;
  }
`;

export const Avatar = styled.div<{ size: "sm" | "md" | "lg" }>`
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  border: 2px solid #4caf50;

  /* Dynamic width and height based on size prop */
  width: ${({ size }) =>
    size === "sm" ? "50px" : size === "md" ? "80px" : "120px"};
  height: ${({ size }) =>
    size === "sm" ? "50px" : size === "md" ? "80px" : "120px"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.h3`
  font-weight: bold;
  margin-top: 10px;
  font-size: 1rem;
`;

export const Role = styled.p`
  color: #718ebf;
  font-size: 0.9rem;
  margin-top: 5px;
`;
