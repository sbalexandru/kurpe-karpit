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
import i18n from "../i18n";

const MainPage = () => {
  return (
    <Container>
      <StartImage />
      <SecondImg>
        <AbautBox>
          <Title>Kurpe Istike</Title>
          <TextAreea>{i18n.t("about.welcome")}</TextAreea>
        </AbautBox>

        <RightBox>
          <Link to="/WheelPage">
            <ImageBox src={Images.Wheel} alt="Wheel" />
            <TextBox>
              <Title>Kurpe Volan</Title>
              <TextAreea>{i18n.t("mainPage.wheelAbout")}</TextAreea>
            </TextBox>
          </Link>
        </RightBox>

        <LeftBox>
          <Link to="/KarpitPage">
            {window.screen.width <= 760 ? (
              <>
                <ImageBox src={Images.SeatLight2} alt="Karpit" />
                <TextBox>
                  <Title>Kurpe Seat Karpit</Title>
                  <TextAreea>{i18n.t("mainPage.karpitAbout")}</TextAreea>
                </TextBox>
              </>
            ) : (
              <>
                <TextBox>
                  <Title>Kurpe Seat Karpit</Title>
                  <TextAreea>{i18n.t("mainPage.karpitAbout")}</TextAreea>
                </TextBox>
                <ImageBox src={Images.SeatLight2} alt="Karpit" />
              </>
            )}
          </Link>
        </LeftBox>

        <RightBox>
          <Link to="/SofaPage">
            <ImageBoxSofa src={Images.Sofa} alt="SofaBox" />
            <TextBox>
              <Title>Kurpe Sofa</Title>
              <TextAreea>{i18n.t("mainPage.sofaAbout")}</TextAreea>
            </TextBox>
          </Link>
        </RightBox>
      </SecondImg>
    </Container>
  );
};

export default MainPage;
