import React, { Component } from "react";

import Web3 from 'web3';
import RegionBracket from "../Builder/RegionBracket";
import FinalFour from "../Builder/FinalFour";
import CoreAbi from '../../CoreAbi';

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
      region: 0
      //results: [0,7,4,3,5,2,6,1,0,3,2,1,0,1,0,15,22,19,27,20,17,21,16,15,19,17,16,15,17,15,30,38,34,33,35,32,36,31,38,34,32,31,34,31,34,45,52,49,48,50,47,51,46,52,49,50,46,49,50,50,15,50,15]
      //[0, 7, 4, 3, 5, 2, 6, 1, 0, 3, 2, 1, 0, 1, 0, 30, 23, 26, 27, 25, 28, 24, 29, 30, 27, 28, 29, 30, 29, 30, 30, 38, 34, 33, 35, 32, 36, 31, 38, 33, 35, 31, 33, 31, 31, 45, 52, 49, 48, 50, 47, 51, 46, 45, 49, 47, 51, 45, 51, 45, 0, 31, 0]
      }

      this.fillBracket = this.fillBracket.bind(this)
      this.fillBracket()
  }

  async fillBracket() {
    let bracket = await this.state.core.methods.getPredictions(5).call()
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
      {this.state.region===0 && <RegionBracket dates={this.state.eastDates} goNext={this.goNext} view={true} results={this.state.results.slice(0, 15)} teams={this.state.eastTeams} region="East" startRes={0} endRes={14} startTeam={0} endTeam={15} updateResult={this.updateResultArray}/>}
      {this.state.region===1 && <RegionBracket dates={this.state.southDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(15, 30)} teams={this.state.southTeams} region="South" startRes={15} endRes={29} startTeam={16} endTeam={31} updateResult={this.updateResultArray}/>}
      {this.state.region===2 && <RegionBracket dates={this.state.westDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(30, 45)} teams={this.state.westTeams} region="West" startRes={30} endRes={44} startTeam={32} endTeam={47} updateResult={this.updateResultArray}/>}
      {this.state.region===3 && <RegionBracket dates={this.state.midwestDates} goBack={this.goBack} goNext={this.goNext} view={true} results={this.state.results.slice(45, 60)} teams={this.state.midwestTeams} region="Midwest" startRes={45} endRes={59} startTeam={48} endTeam={63} updateResult={this.updateResultArray}/>}
      {this.state.region===4 && <FinalFour allTeams={this.state.eastTeams.concat(this.state.southTeams).concat(this.state.westTeams).concat(this.state.midwestTeams)}
                   view={true} results={this.state.results.slice(60, 63)} teams={[this.state.results[14], this.state.results[29],
                           this.state.results[44], this.state.results[59]]} goBack={this.goBack}
                          start={60} end={62} updateResult={this.updateResultArray}/>}
      </div>
    );
  }
}