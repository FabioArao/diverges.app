import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/Meter.svg";
import meter2 from "../assets/img/Meter2.svg";
import meter3 from "../assets/img/Meter3.svg";
import colorSharp from "../assets/img/Color-Sharp.png";

export const  Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>🚀 Diverges APP! 🚀</h2>

                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="skill-img" />
                                        <h5>Profissionais Capacitados</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="skill-img" />
                                        <h5>Tecnologia</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="skill-img" />
                                        <h5>Acompanhamento</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="skill-img" />
                                        <h5>Diverges App</h5>
                                    </div>
                                </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background" src={colorSharp} alt="colorSharp" />
        </section>

);
}