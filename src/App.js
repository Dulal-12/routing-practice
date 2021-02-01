import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Friend from './components/Friend/Friend';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoFound from './components/NoFound/NoFound';
import FriendDetail from './components/FriendDetail/FriendDetail';
function App() {
  
  return (
    <Router>
        <Switch>
            <Route exact path ="/">
                        <Home></Home>
            </Route>

            <Route path = "/home">
                       <Home></Home>
            </Route>

            <Route exact path ="/about/:id">
                      <FriendDetail></FriendDetail>
            </Route>

            <Route path = '*'>
                        <NoFound></NoFound>
            </Route>
         </Switch>
    </Router>
  );
}

export default App;
