import React, {useState, useEffect, useRef} from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import io from "socket.io-client"; 
import Navbar from './Navbar';
import Home from './Home';
import Chat from './Chat';
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
