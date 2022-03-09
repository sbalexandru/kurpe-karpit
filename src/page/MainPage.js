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
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Container>
      <StartImage />

      <AbautBox>
        <Title>Kurpe Istike</Title>
        <TextAreea>Varok szabok mint az alat</TextAreea>
      </AbautBox>

      <WheelBox>
        <Link to="/WheelPage">
          <ImageBox src={Images.Wheel} alt="Wheel" />
          <div>
            <Title>Kurpe Volan</Title>
            <TextAreea>Eszt tekertd meg mint az alat</TextAreea>
          </div>
        </Link>
      </WheelBox>

      <KarpitBox>
        <Link to="/KarpitPage">
          <div>
            <Title>Kurpe Istike</Title>
            <TextAreea>Supegy bele mint az alat</TextAreea>
          </div>
          <ImageBox src={Images.Seat} alt="Karpit" />
        </Link>
      </KarpitBox>
    </Container>
  );
};

export default MainPage;
