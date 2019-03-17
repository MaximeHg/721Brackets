import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"

import BracketEntry from "./BracketEntry";
import BracketResultEntry from "./BracketResultEntry";
import BracketHeader from "./BracketHeader";

export default class RegionBracket extends Component {

  constructor(props) {
    super(props);

    this.state = {
      regionResults: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
      //regionResults: [0,7,4,3,5,2,6,1,0,3,2,1,0,1,0,15]
    }

    this.updateGameResult = this.updateGameResult.bind(this)
  }

  componentDidMount() {
    let regionResults = [];
    if(this.props.results) {
      for (let i = 0; i < this.props.results.length; i++) {
        regionResults.push(this.props.results[i]-this.props.startTeam);
      }
    } else {
      regionResults = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    }
    this.setState({regionResults})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.results !== this.props.results) {
      let regionResults = []
      for (let i = 0; i < this.props.results.length; i++) {
        regionResults.push(this.props.results[i]-this.props.startTeam);
      }
      this.setState({regionResults})
    }
  }

  updateGameResult(id, winner) {
    if(!this.props.view) {
      let newResults = this.state.regionResults
      newResults[id] = winner;
      this.setState({regionResults:newResults})
      this.props.updateResult(this.props.startRes+id, this.props.startTeam+winner)
    }
  }


  render() {
    return(
      <div>
        <br/>
        <Container className="text-center">
          <h1>{this.props.region} region</h1>
        </Container>
        <br/>
        <BracketHeader />
        <br/>
        <Container>
            <Row>
                <BracketEntry date={this.props.dates[0]} view={this.props.view} game={1} team1={1} team2={16} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry date={this.props.dates[8]} view={this.props.view} game={9} game1={1} game2={2} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[1]} view={this.props.view} game={2} team1={8} team2={9} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 4}}>
                <BracketResultEntry date={this.props.dates[12]} view={this.props.view} game={13} game1={9} game2={10} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[2]} view={this.props.view} game={3} team1={5} team2={12} teams={this.props.teams} result={this.updateGameResult}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry date={this.props.dates[9]} view={this.props.view} game={10} game1={3} game2={4} teams={this.props.teams} results={this.state.regionResults} result={this.updateGameResult}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[3]} view={this.props.view} game={4} team1={4} team2={13} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 6}}>
                <BracketResultEntry date={this.props.dates[14]} view={this.props.view} game={15} game1={13} game2={14} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
              <Col className="text-center" md= {{span:3, offset: 1}}>
                <p >Your {this.props.region} region winner: <br/> <b>{this.props.teams[this.state.regionResults[14]]}</b></p>
                  {this.props.goBack && <Button variant="info" size="md" onClick={this.props.goBack}>Previous region</Button>}
                  <span> </span>{this.props.goNext && <Button variant="success" size="md" onClick={this.props.goNext}>Next region</Button>}
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[4]} view={this.props.view} game={5} team1={6} team2={11} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry date={this.props.dates[10]} view={this.props.view} game={11} game1={5} game2={6} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[5]} view={this.props.view} game={6} team1={3} team2={14} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 4}}>
                <BracketResultEntry date={this.props.dates[13]} view={this.props.view} game={14} game1={11} game2={12} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[6]} view={this.props.view} game={7} team1={7} team2={10} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
            <Row>
              <Col md= {{span:'2.5', offset: 2}}>
                <BracketResultEntry date={this.props.dates[11]} view={this.props.view} game={12} game1={7} game2={8} result={this.updateGameResult} results={this.state.regionResults} teams={this.props.teams}/>
              </Col>
            </Row>
            <Row>
              <BracketEntry date={this.props.dates[7]} view={this.props.view} game={8} team1={2} team2={15} result={this.updateGameResult} teams={this.props.teams}/>
            </Row>
        </Container>
      </div>
    );
  }
}