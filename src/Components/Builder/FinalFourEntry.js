import React, { Component } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default class FinalFourEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      team1: "",
      team2: "",
      item1Classes:"",
      item2Classes:""
    }

    this.chooseTeam1 = this.chooseTeam1.bind(this);
    this.chooseTeam2 = this.chooseTeam2.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.team1 !== this.props.team1 || prevProps.team2 !== this.props.team2) {
        this.setState({team1:this.props.teamsName[this.props.team1]})
        this.setState({team2:this.props.teamsName[this.props.team2]})
      }
  }

  chooseTeam1() {
    if(!this.props.view) {
      this.props.result(this.props.game-1, this.props.team1)
      let item1Classes = "font-weight-bold"
      let item2Classes = ""
      this.setState({item1Classes})
      this.setState({item2Classes})
    }
  }

  chooseTeam2() {
    if(!this.props.view) {
      this.props.result(this.props.game-1, this.props.team2)
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
            <ListGroup.Item className={this.state.item1Classes+" entry"} onClick={this.chooseTeam1}> {this.state.team1}</ListGroup.Item>
            <ListGroup.Item className={this.state.item2Classes+" entry"} onClick={this.chooseTeam2}> {this.state.team2}</ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <p className="text-center small">{this.props.date}</p>
        </div>
      </div>
    );
  }
}