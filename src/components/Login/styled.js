import styled from "styled-components";
import { css } from "styled-components";

export const LoginPageContainer = styled("div")`
  font-size: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled("h2")`
  font-size: 2em;
`;

export const Form = styled("form")`
  max-width: 500px;
  height: 300px;
  margin-top: 10vh;
  padding-inline: 10vw;
  padding-block: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    120deg,
    rgba(40, 40, 40, 0.25),
    rgba(40, 40, 40, 0.75),
    70%,
    rgba(40, 40, 40, 0.25)
  );
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: inset 4px 4px 5px 0 rgba(255, 255, 255, 0.25),
    inset -4px -4px 5px 0 rgba(0, 0, 0, 0.125), 0 0 10px 1px rgba(0, 0, 0, 0.25);
`;

export const Label = styled("label")`
  display: block;
  text-align: center;
  line-height: 150%;
`;

export const Input = styled("input")`
  border-radius: 10px;
  width: 200px;
`;

export const Button = styled("button")`
  width: 60%;
  height: 12%;
  border-radius: 10px;
  border: none;
  &:first-child {
    margin-bottom: 0.5em;
  }
  ${(props) =>
    props.green &&
    css`
      background-color: green;
    `
   }
    ${(props) =>
    props.blue &&
    css`
      background-color: blue;
     
    `
   }
`;
