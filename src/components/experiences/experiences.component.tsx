import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'
import Row from 'react-bootstrap/Row'

class Experience extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <h2>Experiences</h2>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default Experience