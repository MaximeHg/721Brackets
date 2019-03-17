import React, { Component } from "react";

import Web3 from 'web3';
import RegionBracket from "../Builder/RegionBracket";
import FinalFour from "../Builder/FinalFour";
import CoreAbi from '../../CoreAbi';
import Footer from '../Footer/Footer';

export default class BracketViewer extends Component {

  constructor(props) {
    super(props);

    const web3 = new Web3(window.web3.currentProvider)
    let address = web3.utils.toChecksumAddress("0x4cb778381ac8f4ec20df3adcee0dd2da17013044")
    //const marketplace = new web3.eth.Contract(MarketplaceAbi, address)
    const core = new web3.eth.Contract(CoreAbi, address)

    this.state = {bracket:[],
                  core:core,
                  web3: web3,
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
      region: 0
      //results: [0,7,4,3,5,2,6,1,0,3,2,1,0,1,0,15,22,19,27,20,17,21,16,15,19,17,16,15,17,15,30,38,34,33,35,32,36,31,38,34,32,31,34,31,34,45,52,49,48,50,47,51,46,52,49,50,46,49,50,50,15,50,15]
      //[0, 7, 4, 3, 5, 2, 6, 1, 0, 3, 2, 1, 0, 1, 0, 30, 23, 26, 27, 25, 28, 24, 29, 30, 27, 28, 29, 30, 29, 30, 30, 38, 34, 33, 35, 32, 36, 31, 38, 33, 35, 31, 33, 31, 31, 45, 52, 49, 48, 50, 47, 51, 46, 45, 49, 47, 51, 45, 51, 45, 0, 31, 0]
      }

      this.fillBracket = this.fillBracket.bind(this)
      this.fillBracket()
  }

  async fillBracket() {
    let bracket = await this.state.core.methods.getPredictions(this.props.match.params.id).call()
    this.setState({bracket:bracket})
    const newBracket = this.state.bracket.map(x => parseInt(x));
    this.setState({results:newBracket})
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
      <br/>
      <div className="text-center">
        <h1>Bracket for token ID #{this.props.match.params.id}</h1>
        <small>To view a specific token, use the URL parameter: 721Brackets/view/tokenID</small>
      </div>
      {this.state.region===0 && <RegionBracket dates={this.state.eastDates} goNext={this.goNext} view={true} results={this.state.results.slice(0, 15)} teams={this.state.eastTeams} region="East" startRes={0} endRes={14} startTeam={0} endTeam={15} updateResult={this.updateResultArray}/>}
      {this.state.region===2 && <RegionBracket dates={this.state.southDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(30, 45)} teams={this.state.southTeams} region="South" startRes={30} endRes={44} startTeam={32} endTeam={47} updateResult={this.updateResultArray}/>}
      {this.state.region===1 && <RegionBracket dates={this.state.westDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(15, 30)} teams={this.state.westTeams} region="West" startRes={15} endRes={29} startTeam={16} endTeam={31} updateResult={this.updateResultArray}/>}
      {this.state.region===3 && <RegionBracket dates={this.state.midwestDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(45, 60)} teams={this.state.midwestTeams} region="Midwest" startRes={45} endRes={59} startTeam={48} endTeam={63} updateResult={this.updateResultArray}/>}
      {this.state.region===4 && <FinalFour allTeams={this.state.eastTeams.concat(this.state.westTeams).concat(this.state.southTeams).concat(this.state.midwestTeams)}
                   view={true} results={this.state.results.slice(60, 63)} teams={[this.state.results[14], this.state.results[29],
                           this.state.results[44], this.state.results[59]]} goBack={this.goBack}
                          start={60} end={62} updateResult={this.updateResultArray}/>}
      <Footer />
      </div>
    );
  }
}