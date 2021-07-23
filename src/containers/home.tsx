import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import displayPicture from "../assets/images/batman.jpeg";
import Age from '../components/age.component'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <Container>
            <Row> <h2>Porfile</h2></Row>
            <Row>
              <span>Geek Alert!</span>
              <hr></hr>
            </Row>
            <Row>
              <Col>
                <h3>About me</h3>
                <p>
                  I am a Sikh boy, learning its way through the world of
                  computer science. I love playing video games, especially, RTS.
                </p>
              </Col>
              <Col>
                <Image src={displayPicture} roundedCircle></Image>
              </Col>
              <Col>
                <Age dateOfBirth={new Date("1991-10-18T12:00:00.00Z")}></Age>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
