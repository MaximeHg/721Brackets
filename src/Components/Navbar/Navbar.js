import React, { Component } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class BracketNavbar extends Component {

  render() {
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/home">NFT your bracket!</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/east">East Region</Nav.Link>
            <Nav.Link href="/south">South Region</Nav.Link>
            <Nav.Link href="/west">West Region</Nav.Link>
            <Nav.Link href="/midwest">Midwest Region</Nav.Link>
            <Nav.Link href="/marketplace">Marketplace</Nav.Link>
          </Nav>
        </Navbar>
    );
  }

}

