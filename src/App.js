import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BracketNavbar from './Components/Navbar/Navbar';
import BracketBuilder from './Components/Builder/BracketBuilder';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <BracketNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/builder" component={BracketBuilder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
