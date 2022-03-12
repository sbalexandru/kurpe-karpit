import React from "react";
import { Container, Creator, Contact } from "./Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  // faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container>
      <Contact>
        <FontAwesomeIcon className="social facebook" icon={faFacebookSquare} />
        <FontAwesomeIcon className="social insta" icon={faInstagram} />
      </Contact>

      <Creator>
        <FontAwesomeIcon icon={faCopyright} />
        <a href="https://alex-code.netlify.app/" alt="Creator">
          <h2>Sabău Alexandru</h2>
        </a>
      </Creator>
    </Container>
  );
};

export default Footer;
