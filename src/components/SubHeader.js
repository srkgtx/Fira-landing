import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const SubBox = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const Border = styled.div`
  padding: 5%;
  border-radius: 1vw 5vw 5vw;
  border: 0.3vw solid rgb(7, 80, 86);
  max-width: 60%;

  h1 {
    color: #075056;
  }

  h3 {
    margin-top: 10px;
    color: #7c8387;
  }
`;

const useSiteMetadataSubHeader = () => {
  const data = useStaticQuery(
    graphql`
      query subHeader {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            Subhead {
              description
              title
              image {
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

const SubHeader = () => {
  const { image, title, description } = useSiteMetadataSubHeader().Subhead;
  
  return (
    <MainBox>
      <GatsbyImage
        style={{ width: "100%" }}
        image={getImage(image)}
        layout="fullWidth"
        alt=""
      />
      <SubBox>
        <Border>
          <h1>{title}</h1>
          <h3>{description}</h3>
        </Border>
      </SubBox>
    </MainBox>
  );
};

export default SubHeader;
