import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/headshots-2020-Jerrika.JPG";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Jerrika Gabriel
                </Card.Title>
                  <Card.Text>
                  I am a dedicated and passionate full-stack developer with a recently completed Full-Stack Developer Bootcamp. 
                  </Card.Text>
                  <Card.Text>
                  During this intensive program, I honed my skills in both front-end and back-end development, working extensively with modern technologies to build robust and scalable applications.                </Card.Text>
                  <Card.Text>
                  I am now seeking opportunities to contribute to dynamic and innovative teams, bringing my full-stack expertise and enthusiasm for technology to create impactful solutions. 
                  </Card.Text>
                  <Card.Text>
                  Let's build something amazing together!


                  </Card.Text>
                  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
