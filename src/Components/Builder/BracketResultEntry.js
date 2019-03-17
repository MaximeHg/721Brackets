import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default class BracketResultEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {results:[], item1Classes:"", item2Classes:""}

    this.chooseTeam1 = this.chooseTeam1.bind(this);
    this.chooseTeam2 = this.chooseTeam2.bind(this);
    this.resetResults = this.resetResults.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.results !== prevProps.results) {
      this.setState({results:this.props.results});
    }
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
    if(!this.props.view) {
      if (!this.props.finalFour) this.resetResults()
      this.props.result(this.props.game-1, this.state.results[this.props.game1-1])
      let item1Classes = "font-weight-bold"
      let item2Classes = ""
      this.setState({item1Classes})
      this.setState({item2Classes})
    }
  }

  chooseTeam2() {
    if(!this.props.view) {
      if (!this.props.finalFour) this.resetResults()
      this.props.result(this.props.game-1, this.state.results[this.props.game2-1])
      let item2Classes = "font-weight-bold"
      let item1Classes = ""
      this.setState({item2Classes})
      this.setState({item1Classes})
    }
  }

  render() {
    return(
      <div>
        <div>
        <ListGroup variant="flush">
          <ListGroup.Item className={this.state.item1Classes+" result"} onClick={this.chooseTeam1}>{this.props.teams[this.state.results[this.props.game1-1]]}</ListGroup.Item>
          <ListGroup.Item className={this.state.item2Classes+" result"} onClick={this.chooseTeam2}>{this.props.teams[this.state.results[this.props.game2-1]]}</ListGroup.Item>
        </ListGroup>
        </div>
        <div>
          <p className="text-center small">{this.props.date}</p>
        </div>
      </div>
    );
  }
}