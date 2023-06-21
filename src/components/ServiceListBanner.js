import { getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ItemService from "./grid/ItemService";
import { graphql, useStaticQuery } from "gatsby";

const MainBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BGBox = styled.div`
  position: absolute;
  background-color: #faece2;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Circles1 = styled.div`
  position: absolute;
  left: 0px;
  background-color: #f9d9bbcc;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(-50%, 0%);
`;

const Circles11 = styled.div`
  background-color: #ff3600;
  margin: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const Circles2 = styled.div`
  position: absolute;
  right: 0px;
  border: 3px solid #a3d9bf;
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, 0%);
`;

const Circles22 = styled.div`
  margin: 10%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #409ba3;
`;

const LayoutBox = styled.div`
  z-index: 1;
  margin: 2vw 20%;
  text-align: center;

  h1 {
    color: #075056;
  }

  h3 {
    margin-top: 10px;
    color: #7c8387;
  }
`;

const GridItems = styled.div`
  display: grid;
  margin: 4vw 0px;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw 3vw;
`;

const useSiteMetadataService = () => {
  const data = useStaticQuery(
    graphql`
      query serviceGroupQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "serviceGroup" } }) {
          frontmatter {
            text
            title
            serviceGroup {
              card {
                Color
                text
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
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

const ServiceListBannerComponent = () => {
  const { serviceGroup, text, title } = useSiteMetadataService();
  return (
    <MainBox>
      <LayoutBox>
        <h1>{title}</h1>
        <h3>{text}</h3>
        <GridItems>
          {serviceGroup.map((service, index) => (
            <ItemService
              key={index}
              image={getImage(service.card.icon)}
              title={service.card.title}
              text={service.card.text}
              color={service.card.Color}
              index={index}
            />
          ))}
        </GridItems>
      </LayoutBox>
      <BGBox>
        <Circles1>
          <Circles11 />
        </Circles1>
        <Circles2>
          <Circles22 />
        </Circles2>
      </BGBox>
    </MainBox>
  );
};

export default ServiceListBannerComponent;
