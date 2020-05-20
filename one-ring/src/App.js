import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rules from "./components/Home";
import Announcements from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rules" component={Rules} exact />
          <Route path="/announcements" component={Announcements} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
