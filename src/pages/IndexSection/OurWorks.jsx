import React from "react";
import { Col, Container, Row } from "reactstrap";
import Zoom from "react-reveal/Zoom";

const OurWorks = ({ setRef }) => {
  const images = [
    "https://i.picsum.photos/id/696/500/1000.jpg?hmac=Y0G4wIBSwSkMEC1P-_KfSRjFPKsSY4CempEP5Y71_jQ",
    "https://i.picsum.photos/id/831/500/1000.jpg?hmac=ATbgJ78fErDWHBK8YpXTEQn0baD8hBflnhEOGypQt5s",
    "https://i.picsum.photos/id/524/500/1000.jpg?hmac=0yPSsAbk7plHp_K0g3sjgBC7Nyry4k6dOuck88c-U0M",
    "https://i.picsum.photos/id/829/500/1000.jpg?hmac=ZgPKvvHodSmVDEYviIFEAm1zqPl3NDbICVJYXwOkj6w",
    "https://i.picsum.photos/id/796/500/1000.jpg?hmac=ejcFiRfeUGuvyC-wSxLWhh9_6ZQlig5qn6AM_YChxwk",
    "https://picsum.photos/500/1000",
  ];

  return (
    <div className="section section-basic isometric-section" ref={setRef}>
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h1 className="title">
              <Zoom left cascade>
                Our
              </Zoom>
              <strong className="text-success">
                <Zoom right cascade>
                  Works
                </Zoom>
              </strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {images.map((image, k) => (
              <div key={k} className={`isometric-${k + 1}`}>
                {new Array(4).fill(null).map((index, key) => (
                  <img key={key} src={image} />
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurWorks;
