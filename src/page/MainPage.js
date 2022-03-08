import React from "react";
import {
  Container,
  WheelBox,
  KarpitBox,
  AbautBox,
  TextAreea,
  Title,
  StartImage,
  ImageBox,
} from "./MainPage.styled";
import { Images } from "../components/Images";

const MainPage = () => {
  return (
    <Container>
      <StartImage />
      <AbautBox>
        <Title>Kurpe Istike</Title>
        <TextAreea>Varok szabok mint az alat</TextAreea>
      </AbautBox>
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
