import styled from "styled-components";
import { Images } from "../components/Images";

export const Container = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: stretch;
`;

export const StartImage = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  border: 3px solid red;
  border-style: dashed;
  border-radius: 5px;
  background-color: black;
  background-image: url(${Images.Background});
  background-position: center;
  background-size: cover;
`;

export const ImageBox = styled.img`
  width: 20rem;
  height: 20rem;
`;

export const AbautBox = styled.div`
  width: 80%;
  height: 200px;
  margin: 20px 0;
  border: 2px solid green;
  background-color: pink;
`;

export const Title = styled.h2`
  color: red;
`;

export const TextAreea = styled.p`
  color: green;
  font-size: 19px;
`;

export const WheelBox = styled.div`
  width: 80%;
  height: 200px;
  border: 2px solid pink;
  margin: 100px;
  clip-path: polygon(0 0, 100% 15%, 100% 99%, 0% 100%);
  background-color: green;
`;

export const KarpitBox = styled.div`
  width: 80%;
  height: 200px;
  border: 2px solid white;
  margin: 100px;
  display: flex;
  justify-content: flex-end;
  clip-path: polygon(0 15%, 100% 0%, 100% 99%, 0% 100%);
  background-color: grey;
`;
