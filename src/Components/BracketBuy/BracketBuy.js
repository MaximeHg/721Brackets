import React, { Component } from "react";
import Web3 from 'web3';
//import MarketplaceAbi from '../../MarketplaceAbi';
import CoreAbi from '../../CoreAbi';

//[0,7,4,3,5,2,6,1,0,3,2,1,0,1,0,15,22,19,27,20,17,21,16,15,19,17,16,15,17,15,30,38,34,33,35,32,36,31,38,34,32,31,34,31,34,45,52,49,48,50,47,51,46,52,49,50,46,49,50,50,0,2,0]

export default class BracketBuy extends Component {

  constructor(props) {
    super(props);

    const web3 = new Web3(window.web3.currentProvider)
    let address = web3.utils.toChecksumAddress("0x4cb778381ac8f4ec20df3adcee0dd2da17013044")
    //const marketplace = new web3.eth.Contract(MarketplaceAbi, address)
    const core = new web3.eth.Contract(CoreAbi, address)

    this.state = {core:core,
                  txFeedback:"",
                  txHash: "",
                  web3: web3}

    this.buyBracket = this.buyBracket.bind(this)
  }

  async buyBracket() {
    console.log(this.props.predictions)
    await this.state.core.methods.mintBracket(window.web3.eth.defaultAccount, this.props.predictions).send({from:window.web3.eth.defaultAccount, value:"10000000000000000"})
          .once('transactionHash', function(transactionHash) {
            let txFeedback = "Transaction is being mined... Your bracket is being created!"
            this.setState({txFeedback: txFeedback, txHash:transactionHash})
          }.bind(this))
          .once('confirmation', function(confirmationNumber, receipt) {
            let txFeedback = "Transaction mined! You know own a new bracket!"
            this.setState({txFeedback: txFeedback})
          }.bind(this))
  }

  render() {

    return(
      <div className="text-center">
        <p>
          Once you've finished your bracket, transform it into a unique token and enter our pool!
        </p>
        <button disabled={!this.props.buyable} onClick={this.buyBracket}>Buy bracket</button>
        <br/>
        <p><a rel='noopener noreferrer' target='_blank' href={'https://ropsten.etherscan.io/tx/'+this.state.txHash}>{this.state.txFeedback}</a></p>
      </div>
    );
  }
}