import React from "react";
import {
  Container,
  WheelBox,
  KarpitBox,
  StartImage,
  ImageBox,
} from "./MainPage.styled";
import { Images } from "../components/Images";

const MainPage = () => {
  return (
    <Container>
      <StartImage />
      <WheelBox>
        <ImageBox src={Images.Wheel} alt="Wheel" />
      </WheelBox>
      <KarpitBox>
        <ImageBox src={Images.Seat} alt="Karpit" />
      </KarpitBox>
    </Container>
  );
};

export default MainPage;
