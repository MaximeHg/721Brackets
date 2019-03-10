import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BracketEntry from "./BracketEntry";
import Row from "react-bootstrap/Row";

export default class SouthRegion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pickGame1: "Winner of game #1",
      pickGame2: "Winner of game #2",
      pickGame3: "Winner of game #3",
      pickGame4: "Winner of game #4",
      pickGame5: "Winner of game #5",
      pickGame6: "Winner of game #6",
      pickGame7: "Winner of game #7",
      pickGame8: "Winner of game #8",
      pickGame9: "Winner of game #9",
      pickGame10: "Winner of game #10",
      pickGame11: "Winner of game #11",
      pickGame12: "Winner of game #12",
      pickGame13: "Winner of game #13",
      pickGame14: "Winner of game #14",
      pickGame15: "Winner of game #15"
    }

    this.updateGame1Result = this.updateGame1Result.bind(this)
    this.updateGame2Result = this.updateGame2Result.bind(this)
    this.updateGame3Result = this.updateGame3Result.bind(this)
    this.updateGame4Result = this.updateGame4Result.bind(this)
    this.updateGame5Result = this.updateGame5Result.bind(this)
    this.updateGame6Result = this.updateGame6Result.bind(this)
    this.updateGame7Result = this.updateGame7Result.bind(this)
    this.updateGame8Result = this.updateGame8Result.bind(this)
    this.updateGame9Result = this.updateGame9Result.bind(this)
    this.updateGame10Result = this.updateGame10Result.bind(this)
    this.updateGame11Result = this.updateGame11Result.bind(this)
    this.updateGame12Result = this.updateGame12Result.bind(this)
    this.updateGame13Result = this.updateGame13Result.bind(this)
    this.updateGame14Result = this.updateGame14Result.bind(this)
    this.updateGame15Result = this.updateGame15Result.bind(this)
  }

  updateGame1Result(team) {
    this.setState({pickGame1:team})
  }
  updateGame2Result(team) {
    this.setState({pickGame2:team})
  }
  updateGame3Result(team) {
    this.setState({pickGame3:team})
  }
  updateGame4Result(team) {
    this.setState({pickGame4:team})
  }
  updateGame5Result(team) {
    this.setState({pickGame5:team})
  }
  updateGame6Result(team) {
    this.setState({pickGame6:team})
  }
  updateGame7Result(team) {
    this.setState({pickGame7:team})
  }
  updateGame8Result(team) {
    this.setState({pickGame8:team})
  }
  updateGame9Result(team) {
    this.setState({pickGame9:team})
  }
  updateGame10Result(team) {
    this.setState({pickGame10:team})
  }
  updateGame11Result(team) {
    this.setState({pickGame11:team})
  }
  updateGame12Result(team) {
    this.setState({pickGame12:team})
  }
  updateGame13Result(team) {
    this.setState({pickGame13:team})
  }
  updateGame14Result(team) {
    this.setState({pickGame14:team})
  }
  updateGame15Result(team) {
    this.setState({pickGame15:team})
  }


  render() {
    return(
      <Container>
          <Row>
              <BracketEntry team1="South seed #1" team2="South seed #16" result={this.updateGame1Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 2}}>
              <BracketEntry team1={this.state.pickGame1} team2={this.state.pickGame2} result={this.updateGame9Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #8" team2="South seed #9" result={this.updateGame2Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 5}}>
              <BracketEntry team1={this.state.pickGame9} team2={this.state.pickGame10} result={this.updateGame13Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #5" team2="South seed #12" result={this.updateGame3Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 2}}>
              <BracketEntry team1={this.state.pickGame3} team2={this.state.pickGame4} result={this.updateGame10Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #4" team2="South seed #13" result={this.updateGame4Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 8}}>
              <BracketEntry team1={this.state.pickGame13} team2={this.state.pickGame14} result={this.updateGame15Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #6" team2="South seed #11" result={this.updateGame5Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 2}}>
              <BracketEntry team1={this.state.pickGame5} team2={this.state.pickGame6} result={this.updateGame11Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #3" team2="South seed #14" result={this.updateGame6Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 5}}>
              <BracketEntry team1={this.state.pickGame11} team2={this.state.pickGame12} result={this.updateGame14Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #7" team2="South seed #10" result={this.updateGame7Result}/>
          </Row>
          <Row>
            <Col md= {{span:'2.5', offset: 2}}>
              <BracketEntry team1={this.state.pickGame7} team2={this.state.pickGame8} result={this.updateGame12Result}/>
            </Col>
          </Row>
          <Row>
            <BracketEntry team1="South seed #2" team2="South seed #15" result={this.updateGame8Result}/>
          </Row>
      </Container>
    );
  }
}