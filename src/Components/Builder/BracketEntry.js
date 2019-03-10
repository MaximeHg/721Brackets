import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default class BracketEntry extends Component {

  constructor(props) {
    super(props);

    this.chooseTeam1 = this.chooseTeam1.bind(this);
    this.chooseTeam2 = this.chooseTeam2.bind(this);
  }

  chooseTeam1() {
    this.props.result(this.props.team1)
  }

  chooseTeam2() {
    this.props.result(this.props.team2)
  }

  render() {
    return(
        <ListGroup variant="flush">
          <ListGroup.Item onClick={this.chooseTeam1}>{this.props.team1}</ListGroup.Item>
          <ListGroup.Item onClick={this.chooseTeam2}>{this.props.team2}</ListGroup.Item>
        </ListGroup>
    );
  }
}