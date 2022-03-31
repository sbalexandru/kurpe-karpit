import React from "react";
import {
  WhellContainer,
  SofaContainer,
  KarpitContainer,
  Box,
  Title,
  Text,
  TextBox,
  Image,
  ImageBox,
} from "./Pages.styled";
import { WheelImages } from "../components/WheelImages";
import { KarpitImages } from "../components/KarpitImages";
import { SofaImages } from "../components/SofaImages";
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
      <Box>
        <ImageBox>
          <Image src={WheelImages.Audi1} alt="audi" />
          <Image src={WheelImages.Audi2} alt="audi" />
          <Image src={WheelImages.Audi3} alt="audi" />
          <Image src={WheelImages.Audi4} alt="audi" />
        </ImageBox>
        <TextBox>
          <Title>Title</Title>
          <Text>
            Die Rondo Ganahl AG mit Stammsitz in Frastanz ist ein moderner
            Industriebetrieb in Familienbesitz. Mit über 1.600 Mitarbeiter an
            mehreren Standorten in Europa zählt der Spezialist für Papier,
            Wellpappe, Verpackungen und Recycling zu den führenden Unternehmen
            der Branche.
          </Text>
        </TextBox>
      </Box>
    </WhellContainer>
  );
};

// ------------- End Wheel Page ------------------

// ------------- Start Sofa Page -----------------

export const SofaPage = () => {
  return (
    <SofaContainer>
      <Box>
        <ImageBox>
          <Image src={SofaImages.Fotel} alt="Fotel" />
          <Image src={SofaImages.FotelRetush} alt="Fotel" />
          <Image src={SofaImages.Kanape} alt="kanape" />
          <Image src={SofaImages.KanapeRetush} alt="kanape" />
          <Image src={SofaImages.NagyKanape} alt="kanape" />
          <Image src={SofaImages.NagyKanapeRetush} alt="kanape" />
        </ImageBox>
        <TextBox>
          <Title>Sofa</Title>
          <Text>
            Die Rondo Ganahl AG mit Stammsitz in Frastanz ist ein moderner
            Industriebetrieb in Familienbesitz. Mit über 1.600 Mitarbeiter an
            mehreren Standorten in Europa zählt der Spezialist für Papier,
            Wellpappe, Verpackungen und Recycling zu den führenden Unternehmen
            der Branche.
          </Text>
        </TextBox>
      </Box>

      <Box>
        <ImageBox>
          <Image src={SofaImages.irodaSzek} alt="irodaSzek" />
          <Image src={SofaImages.irodaSzekRetush} alt="irodaSzek" />
          <Image src={SofaImages.konyhaSzek} alt="konyhaSzek" />
          <Image src={SofaImages.konyhaSzekRetush} alt="konyhaSzek" />
          <Image src={SofaImages.konyhaSzekRetushpar} alt="konyhaSzek" />
        </ImageBox>
        <TextBox>
          <Title>Sofa</Title>
          <Text>
            Die Rondo Ganahl AG mit Stammsitz in Frastanz ist ein moderner
            Industriebetrieb in Familienbesitz. Mit über 1.600 Mitarbeiter an
            mehreren Standorten in Europa zählt der Spezialist für Papier,
            Wellpappe, Verpackungen und Recycling zu den führenden Unternehmen
            der Branche.
          </Text>
        </TextBox>
      </Box>
    </SofaContainer>
  );
};

// ------------ End Sofa Page -------------------

// ------------- Start Karpit Page -----------------

export const KarpitPage = () => {
  return (
    <KarpitContainer>
      <Box>
        <ImageBox>
          <Image src={KarpitImages.Suzuki1} alt="karpit" />
          <Image src={KarpitImages.Suzuki2} alt="karpit" />
          <Image src={KarpitImages.Suzuki3} alt="karpit" />
          <Image src={KarpitImages.Suzuki4} alt="karpit" />
          <Image src={KarpitImages.Suzuki5} alt="karpit" />
        </ImageBox>
        <TextBox>
          <Title>Karpit</Title>
          <Text>
            Die Rondo Ganahl AG mit Stammsitz in Frastanz ist ein moderner
            Industriebetrieb in Familienbesitz. Mit über 1.600 Mitarbeiter an
            mehreren Standorten in Europa zählt der Spezialist für Papier,
            Wellpappe, Verpackungen und Recycling zu den führenden Unternehmen
            der Branche.
          </Text>
        </TextBox>
      </Box>
    </KarpitContainer>
  );
};

// ------------- Start Karpit Page -----------------
