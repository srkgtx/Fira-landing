import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ItemStrength from "./grid/ItemStrength";
import { graphql, useStaticQuery } from "gatsby";

const MainBox = styled.div`
  display: flex;
  background-color: #f6f6f6;
`;

const LayoutBox = styled.div`
  margin: 5vw 20%;
  text-align: center;
  color: #075056;
`;

const GridItems = styled.div`
  display: grid;
  margin-top: 2vw;
  grid-template-columns: repeat(2, 1fr);
  gap: 3vw 5vw;
`;

const useSiteMetadataStrength = () => {
  const data = useStaticQuery(
    graphql`
      query strength {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
          frontmatter {
            strength {
              description
              title
              icon {
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

const StrengthBannerComponent = () => {
  const { strength } = useSiteMetadataStrength();

  return (
    <MainBox>
      <LayoutBox>
        <h1>{"Why use the Platform?"}</h1>
        <GridItems>
          {strength.map((item, index) => (
            <ItemStrength
              key={index}
              title={item.title}
              description={item.description}
              image={getImage(item.icon)}
            />
          ))}
        </GridItems>
      </LayoutBox>
    </MainBox>
  );
};

export default StrengthBannerComponent;
