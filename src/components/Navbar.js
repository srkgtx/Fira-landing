import React, { useState } from "react";
import logo from "../img/logo/firaplatform-logo.svg";
import burger from "../../static/img/icon/burger.svg";
import arrow from "../../static/img/icon/arrow.svg";
import world from "../../static/img/icon/world.svg";
import Menu from "./menu";
import Language from "./language";
import { InputSearch } from "./input/inputSearch";

import styled from "styled-components";

const Nav = styled.nav`
  display: grid;
  position: fixed;
  width: 100%;
  z-index: 30;
  border-radius: 0px 0px 30px 30px;
  align-items: stretch;

  background-color: ${(props) => (props.activeMenu ? "#f6f6f6" : "#f6f6f6e5")};
`;

const NavMain = styled.nav`
  display: inline-flex;
  position: relative;
  margin: auto;
  padding: 0 5vw;
  flex-grow: 1;
  width: 100%;
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    img {
      width: 50px;
    }
  }
`;

const ButtonBurger = styled.button`
  background-color: transparent;
  border: 0px;
  @media (max-width: 1024px) {
    img {
      width: 30px;
    }
  }
`;

const CompanyName = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  width: 100px;
  margin-left: 0.5vw;
  color: #075056;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    width: 120px;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonBeOur = styled.button`
  font-size: 18px;
  font-weight: 500;
  margin-left: 1vw;
  color: #ff3600;
  background-color: #f6f6f6e5;
  border-radius: 4px 23.5px 23.5px 45px;
  height: 45px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.2));
  border: 2px solid #ff3600;
  padding: 5px 24px;

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 3px 15px;
    height: 35px;
  }

  display: ${(props) => (props.activSearch ? "none" : "block")};
`;

const HelpCenter = styled.div`
  margin-left: 1vw;
  font-size: 18px;
  font-weight: 500;
  color: #7c8387;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
  display: ${(props) => (props.activSearch ? "none" : "block")};
`;

const ButtonLanguage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-left: 1vw;
  border: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #7c8387;

  p {
    padding: 0px 5px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;

    img {
      width: 20px;
    }
  }
  display: ${(props) => (props.activSearch ? "none" : "flex")};
`;

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveLanguge, setIsActiveLanguge] = useState(false);
  const [isActivSearch, setIsActivSearch] = useState(false);

  return (
    <Nav activeMenu={isActiveMenu}>
      <NavMain>
        <NavBrand>
          <ButtonBurger onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <img src={burger} alt="" />
          </ButtonBurger>
          <img src={logo} alt="" />
          <CompanyName>{"Fira Platform"}</CompanyName>
        </NavBrand>
        <NavItems>
          <ButtonBeOur activSearch={isActivSearch}>
            {"Be Our Platform Man"}
          </ButtonBeOur>
          <HelpCenter activSearch={isActivSearch}>{"Help Center"}</HelpCenter>
          <ButtonLanguage
            activSearch={isActivSearch}
            onClick={() => setIsActiveLanguge(!isActiveLanguge)}
          >
            <img src={world} alt="" />
            <p>{"English"}</p>
            <img src={arrow} alt="" />
          </ButtonLanguage>
          <InputSearch state={{ isActivSearch, setIsActivSearch }} />
        </NavItems>
      </NavMain>
      <Menu active={isActiveMenu} />
      <Language active={isActiveLanguge} />
    </Nav>
  );
};

export default Navbar;
