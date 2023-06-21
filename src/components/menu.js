import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../static/img/icon/arrow.svg";
import { ButtonStyle1 } from "./button/Button";

const Main = styled.div`
  display: block;
  position: absolute;
  padding: 5px 10%;
  top: 100%;
  width: 100%;

  display: ${(props) => (props.active ? "block" : "none")};

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
  }
`;

const ContanerWeb = styled.div`
  display: flex;
  background-color: rgb(246, 246, 246, 0.9);
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  border-radius: 4px 32px 32px 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ListMenuWeb = styled.div`
  display: grid;
  min-height: 200px;
  width: 20%;
`;

const ListButton = styled.button`
  border: none;
  text-align: left;
  padding-left: 20%;
  transition-duration: 0.4s;
  font-size: 18px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  background-color: ${(props) => (props.clicked ? "  #ffdecd" : "#ffffff")};
  color: ${(props) => (props.clicked ? " #ff3600" : "#243037")};

  @media (max-width: 1024px) {
    h3 {
      font-size: 12px;
    }
  }
`;

const ListItemsWeb = styled.div`
  display: grid;
  width: 100%;
  padding: 1vw 2vw;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw 3vw;
`;

const LinkItem = styled.div`
  color: #7c8387;

  &:hover {
    h2 {
      color: #ff3600;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
  }

  h3 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 13px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 12px;
    }

    h3 {
      font-size: 10px;
    }
  }
`;

const ContanerMobile = styled.div`
  display: none;
  padding: 1vw 5vw;
  height: 100vh;
  overflow: scroll;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ListMenuMobile = styled.div`
  display: block;
  width: 100%;
  min-height: 60px;
  align-items: center;

  h2 {
    font-weight: 500;
    color: #7c8387;
    font-size: 15px;

    @media (max-width: 425px) {
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    min-height: 50px;
  }
`;

const ListButtonMenuMobile = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 1vw;
  justify-content: space-between;
  border-bottom: 1px solid #d3ddde;

  background-color: ${(props) => (props.select ? "#FFDECD" : "none")};
  margin-top: ${(props) => (props.margintop ? props.margintop : "0px")};

  h2 {
    color: ${(props) => (props.select ? "#ff3600" : "#7c8387")};
  }

  img {
    width: 20px;

    @media (max-width: 425px) {
      width: 15px;
    }

    transition-duration: 0.3s;
    transform: ${(props) => (props.select ? "rotate(180deg)" : "rotate(0deg)")};
  }

  @media (max-width: 425px) {
    height: 50px;
  }
`;

const ListItemsMobile = styled.div`
  display: ${(props) => (props.select ? "block " : "none")};
`;

const ItemMobile = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3ddde;
  margin-left: 5vw;
  height: 60px;

  @media (max-width: 425px) {
    height: 50px;
  }
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useSiteMetadataNavMenu = () => {
  const data = useStaticQuery(
    graphql`
      query navMenu {
        markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
          frontmatter {
            navMenuList {
              title
              link {
                text
                title
              }
            }
          }
        }
      }
    `
  );
  return data.markdownRemark.frontmatter;
};

const Menu = (data) => {
  const { active } = data;
  const { navMenuList } = useSiteMetadataNavMenu();
  const [selectMenu, setSelectMenu] = useState(0);
  const [selectMenuMobile, setSelectMenuMobile] = useState([]);
  const [selectLanguageMobile, setSelectLanguageMobile] = useState(false);

  if (selectMenuMobile.length < navMenuList.length) {
    for (let i = 0; i < navMenuList.length; i++) {
      selectMenuMobile.push(false);
    }
  }

  const onClickSelectWeb = (index) => {
    setSelectMenu(index);
  };

  const onClickSelectMobile = (index) => {
    let newArr = [...selectMenuMobile];
    newArr[index] = !newArr[index];
    setSelectMenuMobile(newArr);
  };

  return (
    <Main active={active}>
      <ContanerWeb>
        <ListMenuWeb>
          {navMenuList.map((menu, index) => (
            <ListButton
              key={index}
              clicked={selectMenu === index ? true : false}
              onClick={() => onClickSelectWeb(index)}
            >
              <h3>{menu.title}</h3>
            </ListButton>
          ))}
        </ListMenuWeb>
        <ListItemsWeb>
          {navMenuList[selectMenu].link.map((data, index) => (
            <LinkItem key={index}>
              <h2>{data.title}</h2>
              <h3>{data.text}</h3>
            </LinkItem>
          ))}
        </ListItemsWeb>
      </ContanerWeb>
      <ContanerMobile>
        {navMenuList.map((menu, index) => (
          <ListMenuMobile key={index}>
            <ListButtonMenuMobile
              select={selectMenuMobile[index]}
              onClick={() => onClickSelectMobile(index)}
            >
              <h2>{menu.title}</h2>
              <img src={arrow} alt="" />
            </ListButtonMenuMobile>
            <ListItemsMobile select={selectMenuMobile[index]}>
              {navMenuList[index].link.map((data) => (
                <ItemMobile>
                  <h2>{data.title}</h2>
                </ItemMobile>
              ))}
            </ListItemsMobile>
          </ListMenuMobile>
        ))}
        <ListMenuMobile>
          <ListButtonMenuMobile
            select={selectLanguageMobile}
            margintop={"20px"}
            onClick={() => setSelectLanguageMobile(!selectLanguageMobile)}
          >
            <h2>English</h2>
            <img src={arrow} alt="" />
          </ListButtonMenuMobile>
          <ListItemsMobile select={selectLanguageMobile}>
            <ItemMobile>
              <h2>English</h2>
            </ItemMobile>
            <ItemMobile>
              <h2>Thai</h2>
            </ItemMobile>
          </ListItemsMobile>
        </ListMenuMobile>
        <FooterMenu>
          <ButtonStyle1
            style={{ marginTop: "50px" }}
            colorBg={"#FF3600"}
            colotText={"#FFFFFF"}
            fontSize={"12px"}
            padding={"10px"}
          >
            {"Be Our Platform Man"}
          </ButtonStyle1>
        </FooterMenu>
      </ContanerMobile>
    </Main>
  );
};

export default Menu;
