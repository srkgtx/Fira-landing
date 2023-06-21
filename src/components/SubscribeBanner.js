import React from "react";
import styled from "styled-components";
import { ButtonStyle1 } from "./button/Button";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #075056;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  margin: 5% 25%;
  width: 100%;
  text-align: center;

  h1 {
    font-weight: 600;
    color: #ffffff;
  }
`;

const LayoutInput = styled.div`
  margin-top: 3vw;
`;

const Input = styled.input`
  height: 3.5vw;
  width: 60%;
  background-color: #ffffff26;
  background-image: url("/img/icon/mail.svg");
  background-position: 1.5vw 50%;
  background-repeat: no-repeat;
  background-size: 2vw;
  padding-left: 8%;
  padding-right: 1.5vw;
  border-radius: 2vw;
  border: none;

  font-family: Poppins;
  font-weight: 400;
  font-size: 1vw;
  color: #ffffff;

  ::placeholder {
    color: #FFFFFF80;
  }
`;

const SubscribeBannerComponent = () => {
  return (
    <MainBox>
      <LayoutBox>
        <h1>Subscribe to Our Newsletter For Weekly Article Update.</h1>
        <LayoutInput>
          <Input placeholder="Enter your e-mail address" />
          <ButtonStyle1
            style={{ marginLeft: "1vw" }}
            colorBg={"#FF3600"}
            colotText={"#FFFFFF"}
          >
            Subscribe
          </ButtonStyle1>
        </LayoutInput>
      </LayoutBox>
    </MainBox>
  );
};

export default SubscribeBannerComponent;
