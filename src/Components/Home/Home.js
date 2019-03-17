import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Button from "react-bootstrap/Button"

export default class Home extends Component {
  render() {
    return(
      <div className="home">
        <h1 className="welcome">
          Welcome to 721Brackets!
        </h1>
        <br/>
        <p><b>Build your NCAA March Madness 2019 bracket and try to win the pool prize!</b></p>
        <p>You can buy your bracket for 0.01 Ropsten Ether.</p>
        <p>
          <Link to="/721Brackets/build"><Button variant="primary">Build your bracket</Button></Link>
          <span> </span>
          <Link to="/721Brackets/view/5"><Button variant="primary">View submitted brackets</Button></Link>
        </p>
        <div className="prez">
          <p>This application lets you build your NCAA Men's Basketball Tournament bracket. Your predictions are stored inside a
          unique ERC721 (non-fungible token). That way, you can build decentralized March Madness pools with instant payouts and
          a completely transparent verification of the results. <b>The brackets cannot be altered nor modified after tournament starts.</b></p>
          <p>You can also easily trade your bracket if you think you have a good shot at winning a share of the prize pool but don't want to take any risk.
          If your bracket is busted day 1, buy an existing bracket with decent results if you believe it has a shot to be a potential winner.</p>
          <p><strong>Any strategy can work. Anything can happen. It's March Madness!</strong></p>
          <p>For those who aren't familiar with the NCAA Tournament and the March Madness hype around it, check <a rel="noopener noreferrer" target="_blank" href="https://www.ncaa.com/news/basketball-men/2019-03-17/what-march-madness-ncaa-tournament-explained">this article</a>.</p>
          <p>You can ask me anything about this app on <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/MaximeHg">Twitter</a> or check out the code on <a rel="noopener noreferrer" target="_blank" href="https://github.com/MaximeHg/721Brackets-contracts">Github</a>.</p>
          <small><p>Please use Metamask connected to Ropsten.</p>
          <p>Bracket is complete but exact dates&times are not yet available.</p>
          <p>I will try to deploy the finalized contracts to the xDai chain before tournament starts!</p></small>
        </div>
      </div>
    );
  }
}