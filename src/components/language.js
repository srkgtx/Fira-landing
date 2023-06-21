import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  padding-top: 5px;
  top: 100%;
  right: 10vw;

  display: ${props => (props.active ? "block" : "none")};
`;

const ContanerWeb = styled.div`
  display: grid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgb(246, 246, 246, 0.9);
  overflow: hidden;
  backdrop-filter: blur(5px);
  border-radius: 4px 16px 16px 16px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LanButton = styled.button`
  border: none;
  padding: 15px 35px;
  border-radius: 4px 16px 16px 16px;

  font-weight: 600;
  font-size: 18px;

  &:hover {
    background-color: #ffdecd;
  }

  background-color: ${(props) => props.select? "#ffdecd": "#ffffff"};
  color: ${(props) => props.select? "#ff3600": "#7c8387"};

  @media (max-width: 1024px) {
    font-size: 12px;
    padding: 10px 25px;
  }
`;

const Language = (data) => {
  const { active } = data;
  const [selectLang, setSelectLang] = useState("EN");

  return (
    <Main active={active}>
      <ContanerWeb>
        <LanButton
          select={selectLang === "EN" ? true : false}
          onClick={() => setSelectLang("EN")}
        >
          English
        </LanButton>
        <LanButton
          select={selectLang === "TH" ? true : false}
          onClick={() => setSelectLang("TH")}
        >
          ไทย
        </LanButton>
      </ContanerWeb>
    </Main>
  );
};

export default Language;
