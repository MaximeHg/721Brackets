import React, { Component } from "react";

export default class BracketBuy extends Component {

  render() {

    return(
      <div className="text-center">
        <p>
          Now that you've finished your bracket, transform it into a unique token and enter our pool!
        </p>
        <button disabled={!this.props.buyable}>Buy bracket</button>
      </div>
    );
  }
}