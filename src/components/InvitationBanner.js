import React from "react";
import styled from "styled-components";
import banner from "../banner/banner1.png";
import { ButtonStyle1 } from "./button/Button";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #daebe347;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

const Banner = styled.img`
  justify-self: right;
  align-self: end;
  margin-right: 10%;
  max-width: 50%;
`;

const BoxText = styled.div`
  margin: 10% 40% 10% 0;

  h1 {
    font-weight: 600;
    color: #075056;
  }

  h3 {
    margin-top: 1vw;
    font-weight: 400;
    color: #7c8387;
  }
`;

const InvitationBannerComponent = () => {
  return (
    <MainBox>
      <LayoutBox>
        <Banner src={banner} alt="" />
        <BoxText>
          <h1>{"How good is it to become a PlatformMan ?"}</h1>
          <h3>
            The Platform will assist in locating jobs in the regions where
            people desire to work. Additionally, they can gather information for
            registering their own profile to boost their credibility for
            employment by businesses while looking for jobs that match their
            experience and the numerous service categories that are offered on
            the platform. set up a clear work queue and an employment contract
            to contribute to boosting labor productivity
          </h3>
          <ButtonStyle1 style={{marginTop: "2.5vw"}} colorBg={"#FF3600"} colotText={"#FFFFFF"}>Be Our Platform Man</ButtonStyle1>
        </BoxText>
      </LayoutBox>
    </MainBox>
  );
};

export default InvitationBannerComponent;
