import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  BtnSection,
  MeniuDropdown,
  DropDownWrap,
} from "./Header.styled";
import { NavLink } from "react-router-dom";
import { Images } from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Container className={navbar ? "navbar active" : "navbar"}>
      <BtnSection className={navbar ? "navbar active" : "navbar"}>
        <NavLink to="/" className={navbar ? "navbar active" : "navbar hiden"}>
          <Button>
            <img className="home" src={Images.House} alt="House" />
          </Button>
        </NavLink>

        <NavLink to="/WheelPage">
          <Button>
            <img src={Images.Wheel} alt="wheel" />
          </Button>
        </NavLink>

        <NavLink to="/KarpitPage">
          <Button>
            <img src={Images.SeatLight} alt="karpit" />
          </Button>
        </NavLink>

        <NavLink to="/SofaPage">
          <Button>
            <img className="sofa" src={Images.Sofa} alt="sofa" />
          </Button>
        </NavLink>
      </BtnSection>

      <MeniuDropdown
        onClick={() => setMenuOpen(!menuOpen)}
        className={navbar ? "active" : "hiden"}
      >
        {menuOpen === false ? (
          <FontAwesomeIcon icon={faBars}>
            {console.log("inchis")}
          </FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faAlignCenter}>
            {console.log("deschis")}{" "}
          </FontAwesomeIcon>
        )}
        {menuOpen && (
          <DropDownWrap className={navbar ? "active" : "navbar"}>
            <NavLink to="/">
              <Button onClick={() => closeMenu()}>
                <img className="home" src={Images.House} alt="House" />
              </Button>
            </NavLink>

            <NavLink to="/WheelPage">
              <Button onClick={() => closeMenu()}>
                <img src={Images.Wheel} alt="wheel" />
              </Button>
            </NavLink>

            <NavLink to="/KarpitPage">
              <Button onClick={() => closeMenu()}>
                <img src={Images.SeatLight} alt="karpit" />
              </Button>
            </NavLink>

            <NavLink to="/SofaPage">
              <Button onClick={() => closeMenu()}>
                <img className="sofa" src={Images.Sofa} alt="sofa" />
              </Button>
            </NavLink>
          </DropDownWrap>
        )}
      </MeniuDropdown>

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
