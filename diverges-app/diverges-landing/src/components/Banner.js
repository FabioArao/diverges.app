import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImage from "../assets/img/Header-Image.svg";

const WORDS = ["Neuro divergente", "TDAH", "DDA", "Ansiedade"];

export function Banner() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300);

  useEffect(() => {
    const ticker = setInterval(() => {
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      
      setText(isDeleting ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1));

      if (!isDeleting && text === word) {
        setIsDeleting(true);
        setDelta(500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setDelta(500);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [isDeleting, delta, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem vindo ao DivergesApp</span>
            <h1>
              App para Neuro Divergentes 
              <span className="wrap"> {text} </span>
            </h1>

            <p>Sobre o projeto</p>

            <button onClick={() => console.log("connect")}>
              Let's Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
