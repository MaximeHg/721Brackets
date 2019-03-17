import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BracketNavbar from './Components/Navbar/Navbar';
import BracketBuilder from './Components/Builder/BracketBuilder';
import BracketViewer from './Components/Viewer/BracketViewer';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <BracketNavbar />
          <Switch>
            <Route exact path="/721Brackets" component={Home} />
            <Route exact path="/721Brackets/build" component={BracketBuilder} />
            <Route exact path="/721Brackets/view/:id" component={BracketViewer} />
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + '/build'} component={BracketBuilder} />
            <Route exact path={process.env.PUBLIC_URL + '/view/:id'} component={BracketViewer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
