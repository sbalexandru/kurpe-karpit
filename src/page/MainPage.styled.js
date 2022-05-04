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
  @media (max-width: 760px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const ImageBoxSofa = styled.img`
  height: 15rem;
  margin: 20px;
  @media (max-width: 760px) {
    height: 5rem;
  }
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
  margin: 10px 0 20px 0;
`;

export const TextBox = styled.div`
  font-size: 19px;
`;

export const RightBox = styled.div`
  width: 100%;
  margin: 100px;
  a {
    width: 50%;
    position: relative;
    left: 15%;
    /* margin: 100px; */
    clip-path: polygon(0 0, 100% 15%, 100% 99%, 0% 100%);
    background-color: #000000e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 760px) {
    margin: 30px 20px;
    a {
      flex-direction: column;
      width: 90%;
      left: 9%;
      clip-path: polygon(0 0, 100% 7%, 100% 99%, 0% 100%);
    }
  }
  @media (max-width: 360px) {
    margin: 30px 0;
    a {
      flex-direction: column;
      width: 100%;
      left: 0%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  margin: 100px;

  a {
    width: 50%;
    position: relative;
    left: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    clip-path: polygon(0 15%, 100% 0%, 100% 99%, 0% 100%);
    background-color: #000000e6;
  }
  @media (max-width: 760px) {
    margin: 30px 20px;
    a {
      flex-direction: column;
      width: 90%;
      left: 1%;
      clip-path: polygon(0 7%, 100% 0, 100% 99%, 0% 100%);
    }
  }
  @media (max-width: 360px) {
    margin: 30px 0;
    a {
      flex-direction: column;
      width: 100%;
      left: 0%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
`;
