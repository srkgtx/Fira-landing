import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  position: relative;
  background-color: #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  border: 0.15vw solid ${(props) => (props.color ? props.color : "white")};
  border-radius: 0.5vw 2vw 2vw;
  overflow: hidden;
`;

const Circles = styled.div`
  position: absolute;
  right: 0px;
  width: 65%;
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translate(50%, -50%);
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

const Number = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 15%;
  font-weight: 500;
  font-size: 3vw;
`;

const Layout = styled.div`
  margin: 13% 8%;

  h2 {
    color: #075056;
    margin-top: 0.5vw;
    font-size: 1.5vw;
  }

  h3 {
    margin-top: 0.5vw;
    font-size: 1vw;
    font-weight: 500px;
  }
`;

const ItemService = (props) => {
  const { image, title, text, color, index } = props;
  return (
    <Item color={color}>
      <Circles color={color}>
        <Number style={{color: "white"}}>{`0${index + 1}`}</Number>
      </Circles>
      <Layout>
        <GatsbyImage
          image={image}
          alt=""
          style={{ width: "5vw", aspectRatio: 1, padding: "1vw" }}
        />
        <h2>{title}</h2>
        <h3>{text}</h3>
      </Layout>
    </Item>
  );
};

export default ItemService;
