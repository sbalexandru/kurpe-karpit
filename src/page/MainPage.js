import React from "react";
import { Container, ImageBox } from "./MainPage.styled";
import { Images } from "../components/Images";

const MainPage = () => {
  return (
    <Container>
      <ImageBox src={Images.Wheel} alt="sofa" />
      <p>ceva main</p>
      <ImageBox src={Images.Seat} alt="sofa" />
    </Container>
  );
};

export default MainPage;
