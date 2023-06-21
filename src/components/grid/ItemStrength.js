import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 10px;
  word-break: break-all;
  text-align: left;

  h2 {
    color: #075056;
    margin-left: 1vw;
  }

  h3 {
    color: #7c8387;
  }
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 1vw;
`;

const ItemStrength = (props) => {
  const { image, title, description } = props;
  return (
    <Item>
      <Title>
        <GatsbyImage
          image={image}
          alt=""
          ayout="fullWidth"
          style={{
            width: "3vw",
            aspectRatio: 1,
          }}
        />
        <h2>{title}</h2>
      </Title>
      <h3>{description}</h3>
    </Item>
  );
};

export default ItemStrength;
