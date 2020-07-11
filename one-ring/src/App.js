import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Announcements from "./components/Announcements";
import Staff from "./components/Staff";
import LinksAndRules from "./components/LinksAndRules";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/announcements" component={Announcements} exact />
          <Route path="/staff" component={Staff} exact />
          <Route path="/links" component={LinksAndRules} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
