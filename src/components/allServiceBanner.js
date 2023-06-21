import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ButtonStyle1 } from "./button/Button";
import { graphql, useStaticQuery } from "gatsby";

const MainBox = styled.div`
  display: flex;
  position: relative;
  background-color: #ff3600;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LayoutBox = styled.div`
  margin: 2vw 15%;
  text-align: center;

  h1 {
    color: #ffffff;
    font-weight: 600;
  }

  h3 {
    margin-top: 1vw;
    font-weight: 500;
    color: #f6f6f6;
  }
`;

const GridItems = styled.div`
  display: grid;
  margin: 3vw;
  gap: 2vw;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  grid-auto-rows: 15vw;
  grid-auto-flow: dense;
`;

const Item = styled.div`
  display: flex;
  position: relative;
  border-radius: 0.3vw 2vw 2vw;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.1));
  overflow: hidden;
  transition-duration: 0.4s;
  background: #fff;

  img {
    object-fit: cover;
    scale: 1.1;
  }

  &:hover {
  }

  grid-row: ${(props) => props.row || "span 1"};
`;

const ItemHover = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f58a2b99;
  opacity: 0;

  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  h2 {
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
  }
`;

const MoreButton = styled.button`
  background: #ff3600;
  margin-bottom: 25px;
  margin-top: 20px;
  padding: 15px 40px;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px 32px 32px 32px;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

const useSiteMetadataAllService = () => {
  const data = useStaticQuery(
    graphql`
      query allServiceQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "allService" } }) {
          frontmatter {
            allService {
              card {
                link
                image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              title
            }
            text
            title
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

const AllServiceBannerComponent = () => {
  const { title, text, allService } = useSiteMetadataAllService();
  return (
    <MainBox>
      <LayoutBox>
        <h1>{title}</h1>
        <h3>{text}</h3>
        <GridItems>
          {allService.map((service, index) => (
            <Item
              row={
                index === 1
                  ? "span 3"
                  : index === 2 || index === 3
                  ? "span 2"
                  : "span 1"
              }
              key={index}
              itemHover={ItemHover}
            >
              <GatsbyImage image={getImage(service.card.image)} alt="" />
              <ItemHover>
                <h2>{service.title}</h2>
                <MoreButton>Detail</MoreButton>
              </ItemHover>
            </Item>
          ))}
        </GridItems>
        <ButtonStyle1
          colorBg={"#ff3600"}
          colotText={"#ffffff"}
          borderBg={"0.13vw solid #ffffff"}
        >
          View More Service
        </ButtonStyle1>
      </LayoutBox>
    </MainBox>
  );
};

export default AllServiceBannerComponent;
