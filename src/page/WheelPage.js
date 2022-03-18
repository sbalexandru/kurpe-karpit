import React from "react";
import { Container } from "./WheelPage.styled";
import { WheelImages } from "../components/WheelImages";

const WheelPage = () => {
  return (
    <Container>
      <h1>wheel</h1>
      <img src={WheelImages.Audi1} alt="audi" />
      <img src={WheelImages.Audi2} alt="audi" />
      <img src={WheelImages.Audi3} alt="audi" />
      <img src={WheelImages.Audi4} alt="audi" />
    </Container>
  );
};

export default WheelPage;
