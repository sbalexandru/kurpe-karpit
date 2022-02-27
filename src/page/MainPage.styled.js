import styled from "styled-components";
import { Images } from "../components/Images";

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  border: 3px solid red;
  border-style: dashed;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
  background-color: black;
  background-image: url(${Images.Background});
  background-position: center;
  background-size: cover;
`;

export const ImageBox = styled.img`
  width: 20rem;
  height: 20rem;
`;
