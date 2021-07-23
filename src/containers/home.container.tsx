import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/esm/Container";
import { Col, Row } from "react-bootstrap";
import displayPicture from "../assets/images/batman.jpeg";
import Age from "../components/age.component";
import "./home.container.scss";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <section className="profile">
            <Container>
              <div className="title">
                <Row>
                  <h2>Profile</h2>
                </Row>
                <Row>
                  <span>Geek Alert!</span>
                  <br></br>
                </Row>
                <Row>
                  <hr></hr>
                </Row>
              </div>
              <Row>
                <Col>
                  <h3>About me</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec quis nisi nulla. Cras lorem enim, volutpat eget lorem
                    nec, venenatis porttitor massa. Pellentesque nec sapien
                    elit. Nunc ultrices pellentesque urna, at suscipit dolor
                    elementum id. Nunc congue, nunc at imperdiet aliquet, odio
                    tortor posuere odio, non congue lacus diam ac tortor.
                    Praesent volutpat felis in gravida sagittis. Aliquam augue
                    est, eleifend et dignissim vitae, lobortis id nisl. Aenean
                    viverra lacinia bibendum. Etiam lacinia tempor luctus. Donec
                    tempus enim at mattis laoreet. Aliquam cursus congue nunc,
                    mattis ultricies ipsum venenatis accumsan. Donec eu diam
                    lacus. Maecenas pretium mi quis eros lacinia, et dapibus
                    velit auctor.
                  </p>
                </Col>
                <Col>
                  <Image src={displayPicture} roundedCircle></Image>
                </Col>
                <Col>
                  <Row>
                    <h3>Details</h3>
                  </Row>
                  <Row>
                    <label>Name:</label>
                    <p>Samneet Singh</p>
                  </Row>
                  <Row>
                    <label>Age:</label>
                    <Age
                      dateOfBirth={new Date("1991-10-18T12:00:00.00Z")}
                    ></Age>
                  </Row>
                  <Row>
                    <label>Location:</label>
                    <p>Montreal, Quebec</p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="skills">
            <Container>
              <div className="title">
                <Row><h2>Skills</h2></Row>
                <Row><hr></hr></Row>
              </div>
            </Container>
          </section>
          <section className="experience">
            <Container>
              <div className="title">
                <Row><h2>Experience</h2></Row>
                <Row><hr></hr></Row>
              </div>
            </Container>
          </section>
          <section className="projects">
            <Container>
              <div className="title">
                <Row><h2>Projects</h2></Row>
                <Row><hr></hr></Row>
              </div>
            </Container>
          </section>
          <section className="publications">
            <Container>
              <div className="title">
                <Row><h2>Publications</h2></Row>
                <Row><hr></hr></Row>
              </div>
            </Container>
          </section>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
