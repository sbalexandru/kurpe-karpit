import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  BtnSection,
  MeniuDropdown,
  DropDownWrap,
  LanguageBtn,
  LanguageDropdown,
  LanguageItem,
} from "./Header.styled";
import { NavLink } from "react-router-dom";

import "flag-icon-css/css/flag-icons.min.css";
import i18next from "i18next";
import cookies from "js-cookie";

import { Images } from "./Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAlignCenter,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const currentLanguage = cookies.get("i18next") || "en";
  const [navbar, setNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

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
  const handleValueChange = () => {
    setLanguageMenuOpen(false);
    refreshPage();
  };

  function refreshPage() {
    window.location.reload();
  }

  const languages = [
    {
      code: "en",
      name: "En",
      country_code: "gb",
    },
    {
      code: "hu",
      name: "Hu",
      country_code: "hu",
    },
    {
      code: "ro",
      name: "Ro",
      country_code: "ro",
    },
    {
      code: "fr",
      name: "Fr",
      country_code: "fr",
    },
    {
      code: "de",
      name: "De",
      country_code: "de",
    },
  ];

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
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
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

      <LanguageDropdown
        onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
        className={navbar ? "navbar active" : "navbar"}
      >
        <FontAwesomeIcon icon={faGlobeAmericas} className="fontIcon" />
        {languageMenuOpen &&
          languages.map(({ code, name, country_code }) => (
            <LanguageBtn key={code}>
              <LanguageItem
                onClick={() =>
                  i18next.changeLanguage(code) && handleValueChange()
                }
                disabled={code === currentLanguage}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-1`}
                ></span>
                <p>{name}</p>
              </LanguageItem>
            </LanguageBtn>
          ))}
      </LanguageDropdown>
    </Container>
  );
};

export default Header;
