import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Button from "react-bootstrap/Button"

export default class Home extends Component {
  render() {
    return(
      <div className="home">
        <h1 className="welcome">
          Welcome to the March Madness 2019 bracket builder !
        </h1>
        <p>Build your bracket or trade your way to the prize pool win!</p>
        <p>
          <Link to="/build"><Button variant="primary">Build your bracket!</Button></Link>
          <span> </span>
          <Link to="/view"><Button variant="primary">View or trade yours!</Button></Link>
        </p>
      </div>
    );
  }
}