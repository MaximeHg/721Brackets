import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class BracketHeader extends Component {

  render() {
    return(
      <Container className="bracket-header">
        <Row>
          <Col className="text-center" md= {{span: 2, offset: 0}}>
            <h5>First Round</h5>
            <small>March 21-22</small>
          </Col>
          <Col className="text-center" md= {{span:2, offset: 0}}>
            <h5>Second Round</h5>
            <small>March 23-24</small>
          </Col>
          <Col className="text-center" md= {{span:2, offset: 0}}>
            <h5>Sweet 16</h5>
            <small>March 28-29</small>
          </Col>
          <Col className="text-center" md= {{span:2, offset: 0}}>
            <h5>Elite 8</h5>
            <small>March 30-31</small>
          </Col>
        </Row>
      </Container>
    );
  }

}

