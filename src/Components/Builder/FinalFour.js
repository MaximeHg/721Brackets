import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BracketEntry from "./BracketEntry";
import BracketResultEntry from "./BracketResultEntry";
import Row from "react-bootstrap/Row";

export default class FinalFour extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalFourResults: [-1,-1,-1]
    }

    this.updateGameResult = this.updateGameResult.bind(this)
  }

  updateGameResult(id, winner) {
    let newResults = this.state.finalFourResults
    newResults[id] = winner;
    this.setState({regionResults:newResults})
    this.props.updateResult(this.props.start+id, winner)
  }


  render() {
    return(
      <div>
        <Container className="text-center">
          <h1>Final Four</h1>
        </Container>
        <Container>
            <Row>
                <BracketEntry finalFour={true} game={1} team1={1} team2={2} teams={this.props.teams} result={this.updateGameResult} results={this.state.finalFourResults}/>
            </Row>
            <Row>
              <Col md= {{span:3, offset: 3}}>
                <BracketResultEntry finalFour={true} game={3} game1={1} game2={2} teams={this.props.teams} result={this.updateGameResult} results={this.state.finalFourResults}/>
              </Col>
              <Col md= {{span:'2.5', offset: 8}}>
                <p>Your winner: <br/>{this.props.teams[this.state.finalFourResults[2]]}</p>
              </Col>
            </Row>
            <Row>
                <BracketEntry finalFour={true} game={2} team1={3} team2={4} teams={this.props.teams} result={this.updateGameResult} results={this.state.finalFourResults}/>
            </Row>
        </Container>
      </div>
    );
  }
}