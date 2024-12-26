import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: #fff;
  height: 100%;
  margin: 30px auto;
  height: 717px;
  border-radius: 25px;
  padding: 30px;

  @media (max-width: 992px) {
    min-height: 100vh;
    height: auto;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f4f5f7;

  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
    border-bottom: 2px solid transparent;
    color: #232323;

    &.active {
      border-bottom: 2px solid #000;
      font-weight: bold;
    }

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  > div {
    width: 50%;
  }

  @media (max-width: 992px) {
    gap: 16px;
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const BoxAvatar = styled.div`
  position: relative;

  svg {
    position: absolute;
    content: "";
    top: 90px;
    right: 15px;
    background: black;
    border-radius: 100%;
    fill: white;
    padding: 4px;

    @media (max-width: 992px) {
      right: 110px;
    }
  }
`;

export const Form = styled.form`
  gap: 20px;
  width: 100%;
  max-width: 865px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    margin-bottom: 10px;
    color: #232323;

    @media (max-width: 992px) {
      font-size: 14px;
    }
  }

  input {
    padding: 10px 10px 10px 20px;
    border: 1px solid #dfeaf2;
    border-radius: 15px;
    font-size: 14px;
    height: 50px;
    color: #718ebf;

    &::placeholder {
      color: #718ebf;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #007bff;
    color: white;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background: #000;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 20px;
  width: 190px;
  height: 50px;

  &:hover {
    background: #333;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 0;
  }
`;
