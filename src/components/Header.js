import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  BtnSection,
  // Dropdown,
  // MeniuDropdown,
} from "./Header.styled";
import { NavLink } from "react-router-dom";
import { Images } from "./Images";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookSquare,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  // const clickDropdown = () => {
  //   setIsClicked(false);
  // };

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

      {/* <MeniuDropdown onClick={() => clickDropdown(isClicked)}>
        {isClicked === false ? (
          <FontAwesomeIcon icon={faFacebookSquare} />
        ) : (
          <FontAwesomeIcon className="social insta" icon={faInstagram} />
        )}
        {isClicked && (
          <Dropdown className={isClicked ? "" : ""}>
            <NavLink
              to="/"
              className={navbar ? "navbar active" : "navbar hiden"}
            >
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
          </Dropdown>
        )}
      </MeniuDropdown>

      <MeniuDropdown onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen === false ? (
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faAlignCenter}></FontAwesomeIcon>
        )}
        {menuOpen && (
          <DropDownWrap>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.home")}</p>
              </DropDownItem>
            </Link>

            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.about")}</p>
              </DropDownItem>
            </Link>

            <Link
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.programs")}</p>
              </DropDownItem>
            </Link>

            <Link
              activeClass="active"
              to="opinion"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.opinion")}</p>
              </DropDownItem>
            </Link>

            <Link
              activeClass="active"
              to="sponsor"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.sponsor")}</p>
              </DropDownItem>
            </Link>

            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <DropDownItem onClick={() => closeMenu()}>
                <p>{i18n.t("header.navbar.contacts")}</p>
              </DropDownItem>
            </Link>
          </DropDownWrap>
        )}
      </MeniuDropdown> */}

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
