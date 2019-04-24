import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '././components/About';
import Home from '././components/Home';
import Login from '././components/Login';
import Search from '././components/Search';
import Navbar from './components/Navbar';


const Routes = () => (
  <BrowserRouter >
    <Switch>
              <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
    </Switch>
  </BrowserRouter>
);

export default Routes;