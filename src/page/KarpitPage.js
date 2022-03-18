import React from "react";
import { Container } from "./KarpitPage.styled";
import { KarpitImages } from "../components/KarpitImages";

const KarpitPage = () => {
  return (
    <Container>
      <h1>Karpitttt</h1>
      <img src={KarpitImages.Suzuki1} alt="karpit" />
      <img src={KarpitImages.Suzuki2} alt="karpit" />
      <img src={KarpitImages.Suzuki3} alt="karpit" />
      <img src={KarpitImages.Suzuki4} alt="karpit" />
      <img src={KarpitImages.Suzuki5} alt="karpit" />
    </Container>
  );
};

export default KarpitPage;
