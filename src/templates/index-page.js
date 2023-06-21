import React from "react";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import SubHeader from "../components/SubHeader";
import ServiceListBannerComponent from "../components/ServiceListBanner";
import StrengthBannerComponent from "../components/StrengthBanner";
import AllServiceBannerComponent from "../components/allServiceBanner";
import PartnersBannerComponent from "../components/partnersBanner";
import InvitationBannerComponent from "../components/InvitationBanner";
import NewsBannerComponent from "../components/NewsBanner";
import SubscribeBannerComponent from "../components/SubscribeBanner";

export const IndexPageTemplate = () => {
  return (
    <div>
      <FullWidthImage/>
      <SubHeader/>
      <StrengthBannerComponent/>
      <ServiceListBannerComponent/>
      <AllServiceBannerComponent/>
      <PartnersBannerComponent/>
      <InvitationBannerComponent/>
      <NewsBannerComponent/>
      <SubscribeBannerComponent/>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate/>
    </Layout>
  );
};

export default IndexPage;