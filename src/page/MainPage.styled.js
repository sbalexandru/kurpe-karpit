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
  .link-box {
    width: 100%;
  }
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

export const SecondImg = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-color: black;
  background-image: url(${Images.SecondBackImg});
  background-position: cover;
  background-position: center;
  background-size: cover;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageBox = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 20px;
`;
export const ImageBoxSofa = styled.img`
  height: 15rem;
  margin: 20px;
`;

export const AbautBox = styled.div`
  width: 80%;
  height: 200px;
  margin: 20px 0;
  text-align: center;
`;

export const Title = styled.h2`
  color: red;
  padding: 20px;
`;

export const TextAreea = styled.p`
  color: white;
  font-size: 19px;
`;

export const TextBox = styled.div`
  font-size: 19px;
`;

export const WheelBox = styled.div`
  width: 100%;
  a {
    width: 40%;
    position: relative;
    left: 15%;
    margin: 100px;
    clip-path: polygon(0 0, 100% 15%, 100% 99%, 0% 100%);
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const KarpitBox = styled.div`
  width: 100%;
  a {
    width: 40%;
    position: relative;
    left: 30%;
    margin: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    clip-path: polygon(0 15%, 100% 0%, 100% 99%, 0% 100%);
    background-color: black;
  }
`;

export const SofaBox = styled.div`
  width: 100%;
  a {
    width: 40%;
    position: relative;
    left: 15%;
    margin: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    clip-path: polygon(0 0, 100% 15%, 100% 99%, 0% 100%);
    background-color: black;
  }
`;
