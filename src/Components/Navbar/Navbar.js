import React, { Component } from "react";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class BracketNavbar extends Component {

  render() {
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="/">721Bracket</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/build">Bracket Builder</Nav.Link>
          </Nav>
        </Navbar>
    );
  }

}

