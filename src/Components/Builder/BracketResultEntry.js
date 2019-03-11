import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default class BracketResultEntry extends Component {

  constructor(props) {
    super(props);

    this.chooseTeam1 = this.chooseTeam1.bind(this);
    this.chooseTeam2 = this.chooseTeam2.bind(this);
    this.resetResults = this.resetResults.bind(this);
  }

  resetResults() {
    if(this.props.game === 9 || this.props.game === 10) {
      this.props.result(12,-1);
    } else if (this.props.game === 11 || this.props.game === 12) {
      this.props.result(13,-1);
    }
    this.props.result(14, -1);
  }

  chooseTeam1() {
    if (!this.props.finalFour) this.resetResults()
    this.props.result(this.props.game-1, this.props.results[this.props.game1-1])
  }

  chooseTeam2() {
    if (!this.props.finalFour) this.resetResults()
    this.props.result(this.props.game-1, this.props.results[this.props.game2-1])
  }

  render() {
    return(
        <ListGroup variant="flush">
          <ListGroup.Item onClick={this.chooseTeam1}>{this.props.teams[this.props.results[this.props.game1-1]]}</ListGroup.Item>
          <ListGroup.Item onClick={this.chooseTeam2}>{this.props.teams[this.props.results[this.props.game2-1]]}</ListGroup.Item>
        </ListGroup>
    );
  }
}