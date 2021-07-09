import React, { Component } from 'react'
import Details from '../details/details.component'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/esm/Container'
import { Col, Row } from 'react-bootstrap'


class Profile extends Component {



    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <h2>Porfile</h2>
                    </Row>
                    <Row>
                        <span>Geek Alert!</span>
                        <hr></hr>
                    </Row>
                    <Row>
                        <Col>
                            <h3>About me</h3>
                            <p>I am a Sikh boy, learning its way through the world of computer science.
                            I love playing video games, especially, RTS.
                            </p>
                        </Col>
                        <Col>
                            <Image src='../../../public/logo192.png' rounded></Image>
                        </Col>
                        <Col>
                            <Details
                                name="Samneet Singh"
                                dateOfBirth={new Date("1991-10-18T12:00:00.00Z")}
                                location="Montreal, Canada">
                            </Details>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Profile