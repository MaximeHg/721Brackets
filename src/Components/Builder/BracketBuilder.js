import React, { Component } from "react";

import RegionBracket from "./RegionBracket";
import FinalFour from "./FinalFour";
import BracketBuy from "../BracketBuy/BracketBuy";

function isResultSet(element) {
  return element === -1;
}

export default class BracketBuilder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eastTeams: ["East seed #1", "East seed #2", "East seed #3",
                  "East seed #4", "East seed #5", "East seed #6",
                  "East seed #7", "East seed #8", "East seed #9",
                  "East seed #10", "East seed #11", "East seed #12",
                  "East seed #13", "East seed #14", "East seed #15",
                  "East seed #16"],
      southTeams: ["South seed #1", "South seed #2", "South seed #3",
                  "South seed #4", "South seed #5", "South seed #6",
                  "South seed #7", "South seed #8", "South seed #9",
                  "South seed #10", "South seed #11", "South seed #12",
                  "South seed #13", "South seed #14", "South seed #15",
                  "South seed #16"],
      westTeams: ["West seed #1", "West seed #2", "West seed #3",
                  "West seed #4", "West seed #5", "West seed #6",
                  "West seed #7", "West seed #8", "West seed #9",
                  "West seed #10", "West seed #11", "West seed #12",
                  "West seed #13", "West seed #14", "West seed #15",
                  "West seed #16"],
      midwestTeams: ["Midwest seed #1", "Midwest seed #2", "Midwest seed #3",
                  "Midwest seed #4", "Midwest seed #5", "Midwest seed #6",
                  "Midwest seed #7", "Midwest seed #8", "Midwest seed #9",
                  "Midwest seed #10", "Midwest seed #11", "Midwest seed #12",
                  "Midwest seed #13", "Midwest seed #14", "Midwest seed #15",
                  "Midwest seed #16"],
                  // all 63 results
      results: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
                -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
                -1,-1,-1],
      finished: false
    }

    this.updateResultArray = this.updateResultArray.bind(this)
  }

  async updateResultArray(index, winner) {
    let newResults = this.state.results
    newResults[index] = winner;
    this.setState({results:newResults})
    let isOver = this.state.results.findIndex(isResultSet)
    console.log(isOver)
    if(isOver === -1) {
      this.setState({finished:true})
    }
  }


  render() {
    return(
      <div>
        <RegionBracket teams={this.state.eastTeams} region="East" start={0} end={14} updateResult={this.updateResultArray}/>
        <RegionBracket teams={this.state.southTeams} region="South" start={15} end={29} updateResult={this.updateResultArray}/>
        <RegionBracket teams={this.state.westTeams} region="West" start={30} end={44} updateResult={this.updateResultArray}/>
        <RegionBracket teams={this.state.midwestTeams} region="Midwest" start={45} end={59} updateResult={this.updateResultArray}/>
        <FinalFour teams={[this.state.eastTeams[this.state.results[14]], this.state.southTeams[this.state.results[29]-15],
                           this.state.westTeams[this.state.results[44]-30], this.state.midwestTeams[this.state.results[59]-45]]}
                          start={60} end={62} updateResult={this.updateResultArray}/>
        <BracketBuy buyable={this.state.finished}/>
      </div>
    );
  }
}