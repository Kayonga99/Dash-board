import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <div className="wrapper">
      <h1>Student Dashboard</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/manatee">Student Name</Link></li>
            <li><Link to="/narwhal">Age</Link></li>
            <li><Link to="/whale">Country</Link></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;