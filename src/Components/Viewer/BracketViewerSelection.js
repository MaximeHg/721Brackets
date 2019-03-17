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

      </div>
    );
  }
}