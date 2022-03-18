import React from "react";
import {
  Container,
  AbautBox,
  RightBox,
  LeftBox,
  ImageBoxSofa,
  TextAreea,
  Title,
  StartImage,
  SecondImg,
  ImageBox,
  TextBox,
} from "./MainPage.styled";
import { Images } from "../components/Images";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Container>
      <StartImage />
      <SecondImg>
        <AbautBox>
          <Title>Kurpe Istike</Title>
          <TextAreea>Varok szabok mint az alat</TextAreea>
        </AbautBox>

        <RightBox>
          <Link to="/WheelPage">
            <ImageBox src={Images.Wheel} alt="Wheel" />
            <TextBox>
              <Title>Kurpe Volan</Title>
              <TextAreea>Eszt tekertd meg mint az alat</TextAreea>
            </TextBox>
          </Link>
        </RightBox>

        <LeftBox>
          <Link to="/KarpitPage">
            <TextBox>
              <Title>Kurpe Istike</Title>
              <TextAreea>Supegy bele mint az alat</TextAreea>
            </TextBox>
            <ImageBox src={Images.SeatLight2} alt="Karpit" />
          </Link>
        </LeftBox>

        <RightBox>
          <Link to="/SofaPage">
            <ImageBoxSofa src={Images.Sofa} alt="SofaBox" />
            <TextBox>
              <Title>Kurpe Istike</Title>
              <TextAreea>Supegy bele mint az alat</TextAreea>
            </TextBox>
          </Link>
        </RightBox>
      </SecondImg>
    </Container>
  );
};

export default MainPage;
