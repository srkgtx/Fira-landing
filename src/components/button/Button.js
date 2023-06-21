import styled from "styled-components";

export const ButtonStyle1 = styled.button`
 
  background: ${(props) => props.colorBg || "#F6F6F6E5"};
  border: ${(props) => props.borderBg || "none"};
  color: ${(props) => props.colotText || "#000000"};
  font-size: ${(props) => props.fontSize || "1vw"};
  padding: ${(props) => props.padding || "1vw"};

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2vw 5vw 5vw;
  font-weight: 700;
`;