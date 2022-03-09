import React, { useState } from "react";
import { Container, Title, Button, BtnSection } from "./Header.styled";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <Container className={navbar ? "navbar active" : "navbar"}>
      <BtnSection className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/">
          <Button>
            <p>home</p>
          </Button>
        </NavLink>

        <NavLink to="/WheelPage">
          <Button>
            <p>Wheel</p>
          </Button>
        </NavLink>

        <NavLink to="/KarpitPage">
          <Button>
            <p>Karpit</p>
          </Button>
        </NavLink>
      </BtnSection>

      <Title className={navbar ? "navbar active" : "navbar"}>
        KURPÉ <br />
        <span>KARPIT</span>
      </Title>

      <BtnSection className={navbar ? "navbar active" : "navbar"}>
        <Button>
          <p>En</p>
        </Button>
      </BtnSection>
    </Container>
  );
};

export default Header;
