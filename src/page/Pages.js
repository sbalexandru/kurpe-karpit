import React from "react";
import {
  WhellContainer,
  SofaContainer,
  KarpitContainer,
  Box,
  Title,
  Text,
  Image,
  ImageBox,
} from "./Pages.styled";
import { WheelImages } from "../components/WheelImages";
import { KarpitImages } from "../components/KarpitImages";
// import { SofaImages } from "../components/SofaImages"
// import i18n from "../i18n";

// import "./index.css";
// const WhellItem = () =>{
//   let Whell1 =  [

//   ]
// }

// ------------- Start Wheel Page ------------------

export const WheelPage = () => {
  return (
    <WhellContainer>
      <p className="test">test testes</p>
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
    </WhellContainer>
  );
};

// ------------- End Wheel Page ------------------

// ------------- Start Sofa Page -----------------

export const SofaPage = () => {
  return (
    <SofaContainer>
      <h1>Sofa</h1>
    </SofaContainer>
  );
};

// ------------ End Sofa Page -------------------

// ------------- Start Karpit Page -----------------

export const KarpitPage = () => {
  return (
    <KarpitContainer>
      <h1>Karpitttt</h1>
      <img src={KarpitImages.Suzuki1} alt="karpit" />
      <img src={KarpitImages.Suzuki2} alt="karpit" />
      <img src={KarpitImages.Suzuki3} alt="karpit" />
      <img src={KarpitImages.Suzuki4} alt="karpit" />
      <img src={KarpitImages.Suzuki5} alt="karpit" />
    </KarpitContainer>
  );
};

// ------------- Start Karpit Page -----------------
