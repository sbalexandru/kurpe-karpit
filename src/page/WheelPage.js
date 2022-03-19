import React from "react";
import {
  Container,
  Box,
  Title,
  Text,
  Image,
  ImageBox,
} from "./WheelPage.styled";
import { WheelImages } from "../components/WheelImages";
// import i18n from "../i18n";

const WheelPage = () => {
  return (
    <Container>
      <Box>
        <Title>Title</Title>
        <Text>audi valami</Text>
        <ImageBox>
          <Image src={WheelImages.Audi1} alt="audi" />
          <Image src={WheelImages.Audi2} alt="audi" />
          <Image src={WheelImages.Audi3} alt="audi" />
          <Image src={WheelImages.Audi4} alt="audi" />
        </ImageBox>
      </Box>
    </Container>
  );
};

export default WheelPage;
