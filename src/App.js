import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    this.clickHendler = this.clickHendler.bind(this)
  }

  clickHendler(arg) {
    this.setState({
      isLoggedIn: arg
    });
  }

  render() {
    let content;

    if (this.state.isLoggedIn) {
      content = <Router>
        <div className="container border-left border-right border-dark">
          <div className="row">

          LoginControl

            {/* Navbar */}
            <Navbar />

            {/* Main block*/}
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </div>
        </div>
      </Router>
    }
    else {
      content = <Router>
        <div className="container border-left border-right border-dark">
          <div className="row">
LoginControl
          </div>
        </div>
      </Router>
    }

    return (
      <React.Fragment>
        <Header />
        {content}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
