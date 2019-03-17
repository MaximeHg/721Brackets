import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FinalFourEntry from "./FinalFourEntry";
import FinalFourFinal from "./FinalFourFinal";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"

export default class FinalFour extends Component {

  constructor(props) {
    super(props);

    this.state = {
      finalFourResults: [-1,-1,-1],
      teams:[-1,-1,-1,-1],
      dates: ["3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST"]
    }

  }

  componentDidMount() {
    let teams = this.props.teams
    let finalFourResults = []
    for (let i = 0; i < this.props.results.length; i++) {
      finalFourResults.push(this.props.results[i]);
    }
    this.setState({finalFourResults})
    this.setState({teams})
  }

  updateGameResult = (id, winner) => {
    if(!this.props.view) {
      console.log("==== RESULT ====")
      console.log(this.props.start+id, winner)
      let newResults = this.state.finalFourResults
      newResults[id] = winner;
      this.setState({finalFourResults:newResults})
      this.props.updateResult(this.props.start+id, winner)
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.results !== this.props.results) {
      let finalFourResults = []
      for (let i = 0; i < this.props.results.length; i++) {
        finalFourResults.push(this.props.results[i]);
      }
      this.setState({finalFourResults})
    }
  }


  render() {
    return(
      <div>
        <br/>
        <Container className="text-center">
          <h1>Final Four</h1>
        </Container>
        <br/>
        <Container>
            <Row>
                <FinalFourEntry date={this.state.dates[0]} view={this.props.view} game={1} team1={this.state.teams[0]} team2={this.state.teams[1]} teamsName={this.props.allTeams} result={this.updateGameResult} results={this.state.finalFourResults}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 3}}>
                <FinalFourFinal date={this.state.dates[2]} view={this.props.view} game={3} game1={1} game2={2} teams={this.props.allTeams} result={this.updateGameResult} results={this.state.finalFourResults}/>
              </Col>
              <Col className="text-center align-middle" md= {{span:'2.5', offset: 2}}>
                <p>Your NCAA Tournament 2019 winner: <br/><b>{this.props.allTeams[this.state.finalFourResults[2]]}</b></p>
                {this.props.goBack && <Button variant="info" onClick={this.props.goBack}>Previous region</Button>}
              </Col>
            </Row>
            <Row>
                <FinalFourEntry date={this.state.dates[1]} view={this.props.view} game={2} team1={this.state.teams[2]} team2={this.state.teams[3]} teamsName={this.props.allTeams} result={this.updateGameResult} results={this.state.finalFourResults}/>
            </Row>
        </Container>
      </div>
    );
  }
}