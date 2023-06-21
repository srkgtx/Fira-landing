import React, { useState } from "react";
import styled from "styled-components";
import iconSearch from "../../../static/img/icon/search.svg";

const MainBox = styled.div`
  display: flex;
  padding: 7px 10px 7px 20px;
  justify-content: center;
  border-radius: 4px 23.5px 23.5px 45px;
  height: 45px;
  overflow: hidden;

  background-color: ${(props) => (props.active ? "#ffdecd" : "none")};

  @media (max-width: 1024px) {
    height: 35px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: #ffdecd;

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  color: #ff3600;
  outline: none;

  ::placeholder {
    color: #ffffff80;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  display: ${(props) => (props.active ? "block" : "none")};
  width: ${(props) => (props.active ? "30vw" : "0")};
`;

const Button = styled.button`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  img {
    width: 35px;
    @media (max-width: 1024px) {
      width: 25px;
    }
  }
`;

export const InputSearch = (stste) => {
  const { isActivSearch, setIsActivSearch } = stste.state;

  return (
    <MainBox active={isActivSearch}>
      <Input active={isActivSearch} />
      <Button onClick={() => setIsActivSearch(!isActivSearch)}>
        <img src={iconSearch} alt="" />
      </Button>
    </MainBox>
  );
};
