import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BracketEntry from "./BracketEntry";
import BracketResultEntry from "./BracketResultEntry";
import Row from "react-bootstrap/Row";

export default class RegionBracket extends Component {

  constructor(props) {
    super(props);

    this.state = {
      regionResults: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    }

    this.updateGameResult = this.updateGameResult.bind(this)
  }

  updateGameResult(id, winner) {
    let newResults = this.state.regionResults
    newResults[id] = winner;
    this.setState({regionResults:newResults})
    this.props.updateResult(this.props.start+id, this.props.start+winner)
  }


  render() {
    return(
      <div>
        <Container className="text-center">
          <h1>{this.props.region} region</h1>
        </Container>
        <Container>
            <Row>
                <BracketEntry game={1} team1={1} team2={16} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry game={9} game1={1} game2={2} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={2} team1={8} team2={9} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 5}}>
                <BracketResultEntry game={13} game1={9} game2={10} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={3} team1={5} team2={12} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry game={10} game1={3} game2={4} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={4} team1={4} team2={13} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 7}}>
                <BracketResultEntry game={15} game1={13} game2={14} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
              <Col md= {{span:'2.5', offset: 10}}>
                <p>{this.props.teams[this.state.regionResults[14]]}</p>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={5} team1={6} team2={11} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry game={11} game1={5} game2={6} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={6} team1={3} team2={14} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 5}}>
                <BracketResultEntry game={14} game1={11} game2={12} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={7} team1={7} team2={10} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry game={12} game1={7} game2={8} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry game={8} team1={2} team2={15} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
        </Container>
      </div>
    );
  }
}