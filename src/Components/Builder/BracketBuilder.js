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
      eastTeams: ["#1 Duke", "#2 Michigan St.", "#3 LSU",
                  "#4 Virginia Tech", "#5 Mississippi St.", "#6 Maryland",
                  "#7 Louisville", "#8 VCU", "#9 UCF",
                  "#10 Minnesota", "#11 Belmont/Temple", "#12 Liberty",
                  "#13 Saint Louis", "#14 Yale", "#15 Bradley",
                  "#16 NC Central/NDST"],
      southTeams: ["#1 Virginia", "#2 Tennessee", "#3 Purdue",
                  "#4 Kansas St.", "#5 Wisconsin", "#6 Villanova",
                  "#7 Cincinnati", "#8 Ole Miss", "#9 Oklahoma",
                  "#10 Iowa", "#11 Saint Mary's", "#12 Oregon",
                  "#13 UC Irvine", "#14 Old Dominion", "#15 Colgate",
                  "#16 Gardner-Webb"],
      westTeams: ["#1 Gonzaga", "#2 Michigan", "#3 Texas Tech",
                  "#4 Florida St.", "#5 Marquette", "#6 Buffalo",
                  "#7 Nevada", "#8 Syracuse", "#9 Baylor",
                  "#10 Florida", "#11 Arizona St./St. John's", "#12 Murray St.",
                  "#13 Vermont", "#14 Northern Kentucky", "#15 Montana",
                  "#16 F.Dickinson/PV A&M"],
      midwestTeams: ["#1 North Carolina", "#2 Kentucky", "#3 Houston",
                  "#4 Kansas", "#5 Auburn", "#6 Iowa St.",
                  "#7 Wofford", "#8 Utah St.", "#9 Washington",
                  "#10 Seton Hall", "#11 Ohio St.", "#12 New Mexico St.",
                  "#13 Northeastern", "#14 Georgia St.", "#15 Abilene Christian",
                  "#16 Iona"],
      eastDates: ["3/22 7:10 PM EDT", "3/22 9:40 PM EDT", "3/22 7:27 PM EDT", "3/22 9:57 PM EDT",
                  "3/21 3:10 PM EDT", "3/21 12:40 PM EDT", "3/21 12:15 PM EDT", "3/21 2:45 PM EDT",
                  "3/24 TBD EDT", "3/24 TBD EDT", "3/23 TBD EDT", "3/23 TBD EDT",
                  "3/28 TBD EDT", "3/28 TBD EDT", "3/30 TBD EDT"],
      southDates: ["3/22 3:10 PM EDT", "3/22 12:40 PM EDT", "3/22 4:30 PM EDT", "3/22 2:00 PM EDT",
                  "3/21 7:20 PM EDT", "3/21 9:50 PM EDT", "3/21 12:15 PM EDT", "3/21 2:45 PM EDT",
                  "3/24 TBD EDT", "3/24 TBD EDT", "3/23 TBD EDT", "3/23 TBD EDT",
                  "3/29 TBD EDT", "3/29 TBD EDT", "3/31 TBD EDT"],
      westDates: ["3/21 7:27 PM EDT", "3/21 9:57 PM EDT", "3/21 4:30 PM EDT", "3/21 2:00 PM EDT",
                  "3/22 4:00 PM EDT", "3/22 1:30 PM EDT", "3/22 6:50 PM EDT", "3/22 9:20 PM EDT",
                  "3/23 TBD EDT", "3/23 TBD EDT", "3/23 TBD EDT", "3/23 TBD EDT",
                  "3/28 TBD EDT", "3/28 TBD EDT", "3/30 TBD EDT"],
      midwestDates: ["3/22 9:20 PM EDT", "3/22 6:50 PM EDT", "3/21 1:30 PM EDT", "3/21 4:00 PM EDT",
                  "3/22 9:50 PM EDT", "3/22 7:20 PM EDT", "3/21 9:40 PM EDT", "3/21 7:10 PM EDT",
                  "3/24 TBD EDT", "3/23 TBD EDT", "3/24 TBD EDT", "3/23 TBD EDT",
                  "3/29 TBD EDT", "3/29 TBD EDT", "3/31 TBD EDT"],
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
        {this.state.region===2 && <RegionBracket dates={this.state.southDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(30, 45)} teams={this.state.southTeams} region="South" startRes={30} endRes={44} startTeam={32} endTeam={47} updateResult={this.updateResultArray}/>}
        {this.state.region===1 && <RegionBracket dates={this.state.westDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(15, 30)} teams={this.state.westTeams} region="West" startRes={15} endRes={29} startTeam={16} endTeam={31} updateResult={this.updateResultArray}/>}
        {this.state.region===3 && <RegionBracket dates={this.state.midwestDates} goBack={this.goBack} goNext={this.goNext} results={this.state.results.slice(45, 60)} teams={this.state.midwestTeams} region="Midwest" startRes={45} endRes={59} startTeam={48} endTeam={63} updateResult={this.updateResultArray}/>}
        {this.state.region===4 &&
          <div>
            <FinalFour goBack={this.goBack} allTeams={this.state.eastTeams.concat(this.state.westTeams).concat(this.state.southTeams).concat(this.state.midwestTeams)}
                     results={this.state.results.slice(60,63)} indexes={[14,29,44,59]} teams={[this.state.results[14], this.state.results[29],
                             this.state.results[44], this.state.results[59]]} teamsName={[this.state.eastTeams[this.state.results[14]], this.state.westTeams[this.state.results[44]-32],
                             this.state.southTeams[this.state.results[29]-16], this.state.midwestTeams[this.state.results[59]-48]]}
                            start={60} end={62} updateResult={this.updateResultArray}/>
            <BracketBuy buyable={this.state.finished} predictions={this.state.results}/>
          </div>}
          <Footer />
      </div>
    );
  }
}