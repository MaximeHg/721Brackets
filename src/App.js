import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BracketNavbar from './Components/Navbar/Navbar';
import EastRegion from './Components/Builder/EastRegion';
import WestRegion from './Components/Builder/WestRegion';
import SouthRegion from './Components/Builder/SouthRegion';
import MidwestRegion from './Components/Builder/MidwestRegion';
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
            <Route exact path="/east" component={EastRegion}/>
            <Route exact path="/south" component={SouthRegion}/>
            <Route exact path="/west" component={WestRegion}/>
            <Route exact path="/midwest" component={MidwestRegion}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
