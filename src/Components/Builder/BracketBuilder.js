import React, { Component } from "react";

import RegionBracket from "./RegionBracket";
import FinalFour from "./FinalFour";
import BracketBuy from "../BracketBuy/BracketBuy";
import Footer from '../Footer/Footer';

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
      eastDates: ["3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST"],
      southDates: ["3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST"],
      westDates: ["3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST"],
      midwestDates: ["3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST", "3/23 9:00 PM EST",
                  "3/23 6:00 PM EST", "3/23 7:00 PM EST", "3/23 8:00 PM EST"],
                  // all 63 results
      results: [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
                -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
                -1,-1,-1],
      region: 0,
      finished: false
    }

    this.updateResultArray = this.updateResultArray.bind(this)
  }

  async updateResultArray(index, winner) {
    let newResults = this.state.results
    newResults[index] = winner;
    this.setState({results:newResults})
    let isOver = this.state.results.findIndex(isResultSet)
    if(isOver === -1) {
      this.setState({finished:true})
    }
  }

  goNext = () => {
    let region = this.state.region+1
    this.setState({region:region})
  }

  goBack = () => {
    let region = this.state.region-1
    this.setState({region:region})
  }

  render() {
    return(
      <div>
        {this.state.region===0 && <RegionBracket dates={this.state.eastDates} goNext={this.goNext} results={this.state.results.slice(0, 15)} teams={this.state.eastTeams} region="East" startRes={0} endRes={14} startTeam={0} endTeam={15} updateResult={this.updateResultArray}/>}
        {this.state.region===1 && <RegionBracket dates={this.state.southDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(15, 30)} teams={this.state.southTeams} region="South" startRes={15} endRes={29} startTeam={16} endTeam={31} updateResult={this.updateResultArray}/>}
        {this.state.region===2 && <RegionBracket dates={this.state.westDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(30, 45)} teams={this.state.westTeams} region="West" startRes={30} endRes={44} startTeam={32} endTeam={47} updateResult={this.updateResultArray}/>}
        {this.state.region===3 && <RegionBracket dates={this.state.midwestDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(45, 60)} teams={this.state.midwestTeams} region="Midwest" startRes={45} endRes={59} startTeam={48} endTeam={63} updateResult={this.updateResultArray}/>}
        {this.state.region===4 &&
          <div>
            <FinalFour goBack={this.goBack} allTeams={this.state.eastTeams.concat(this.state.southTeams).concat(this.state.westTeams).concat(this.state.midwestTeams)}
                     results={this.state.results.slice(60,63)} indexes={[14,29,44,59]} teams={[this.state.results[14], this.state.results[29],
                             this.state.results[44], this.state.results[59]]} teamsName={[this.state.eastTeams[this.state.results[14]], this.state.southTeams[this.state.results[29]-16],
                             this.state.westTeams[this.state.results[44]-32], this.state.midwestTeams[this.state.results[59]-48]]}
                            start={60} end={62} updateResult={this.updateResultArray}/>
            <BracketBuy buyable={this.state.finished} predictions={this.state.results}/>
          </div>}
          <Footer />
      </div>
    );
  }
}