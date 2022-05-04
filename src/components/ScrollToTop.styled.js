import styled from "styled-components";
import { Images } from "./Images";

export const ScrollBtn = styled.div`
  &.opacity-100 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    border: 3px solid #ffffff;
    right: 40px;
    bottom: 20px;
    z-index: 999;
    background-image: url(${Images.UpArrow});
    background-position: cover;
    background-position: center;
    background-size: cover;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      transition: all 0.5s;
      background-color: red;
      border: 5px solid red;
    }
  }
  &.opacity-0 {
    display: none;
    transition: all 0.5s;
  }
`;
