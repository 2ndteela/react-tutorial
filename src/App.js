import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Examples from './pages/Examples'

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div id="page" >
            <div id="nav">
              <div id="nav-mid">
                <Link to="/" >Home</Link>
                <Link to="/examples">Examples</Link>
              </div>
            </div>
            <div id="page-content">
              <Route exact path="/" component={Home} />
              <Route path="/examples" component={Examples} />
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
