import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';


const Routes = () => (
  <BrowserRouter >
    <Switch>
      <div className="container border-left border-right border-dark">
        <div className="row">

          {/* Navbar */}
          <Navbar />

          {/* Main block*/}
          <Route exact path="/(|home)" component={Home} />
          <Route path="/search" component={Search} />
        </div>
      </div>
    </Switch>
  </BrowserRouter>
);

export default Routes;