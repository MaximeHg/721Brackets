import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return(
      <div className="footer text-center">
        <p><small>Smart contracts are available <a rel="noopener noreferrer" target="_blank" href="https://github.com/MaximeHg/721Brackets-contracts">here</a></small></p>
        <p><small>You can follow or contact me <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/MaximeHg">here</a>!</small></p>
      </div>
    );
  }
}