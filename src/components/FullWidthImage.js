import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ButtonDownLoad } from "./button/ButtonDownLoad";

import appstoreLogo from "../../static/img/icon/appleStore.svg";
import googleplayLogo from "../../static/img/icon/googlePlay.svg";
import { graphql, useStaticQuery } from "gatsby";

const MainBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const GridLayout = styled.div`
  display: grid;
  position: absolute;
  height: 100%;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
`;

const HeadingBox = styled.div`
  margin: 0 25%;
  padding-top: 3vw;
`;

const ImageBox = styled.div`
  max-width: 60%;
  place-self: end left;
`;

const HeadingText = styled.h1`
  color: #075056;
`;

const SubHeadingText = styled.h3`
  color: #075056;
`;

const ButtonBox = styled.div`
  margin-top: 2vw;
  display: flex;
`;

const useSiteMetadataHeader = () => {
  const data = useStaticQuery(
    graphql`
      query header {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            header {
              heading
              subheading
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              imageBg {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

export default function FullWidthImage() {
  const { heading, subheading, image, imageBg } =
    useSiteMetadataHeader().header;

  return (
    <React.Fragment>
      <MainBox>
        <GatsbyImage
          style={{ width: "100%" }}
          image={getImage(imageBg)}
          layout="fullWidth"
          alt=""
        />
        <GridLayout>
          <HeadingBox>
            <HeadingText>{heading}</HeadingText>
            <SubHeadingText>{subheading}</SubHeadingText>
            <ButtonBox>
              <ButtonDownLoad>
                <img src={appstoreLogo} />
              </ButtonDownLoad>
              <ButtonDownLoad>
                <img src={googleplayLogo} />
              </ButtonDownLoad>
            </ButtonBox>
          </HeadingBox>
          <ImageBox>
            <GatsbyImage image={getImage(image)} />
          </ImageBox>
        </GridLayout>
      </MainBox>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
