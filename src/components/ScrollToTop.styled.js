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
    bottom: 70px;
    z-index: 999;
    background-image: url(${Images.UpArrow});
    background-position: cover;
    background-position: center;
    background-size: cover;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.5s;
    :hover {
      transition: all 0.5s;
      background-color: red;
      border: 5px solid red;
    }
  }
  &.opacity-0 {
    opacity: 0;
    bottom: -60px;
    transition: all 0.5s;
  }
  @media (max-width: 760px) {
    &.opacity-100 {
      width: 40px;
      height: 40px;
      right: 20px;
      bottom: 70px;
      :hover {
        border: 4px solid red;
      }
    }
  }
  @media (max-width: 360px) {
    &.opacity-100 {
      width: 30px;
      height: 30px;
      right: 10px;
      :hover {
        border: 3px solid red;
      }
    }
  }
`;
