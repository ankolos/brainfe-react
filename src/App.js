import React, { Component } from 'react';
import Header from './component/Header';
import Home from './component/Home';
import Search from './component/Search';
import About from './component/About';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import LoginControl from './component/LoginControl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
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

            {/* Login control */}
            <LoginControl onClick={this.clickHendler} />

            {/* Navbar */}
            <Navbar />

            {/* Main block*/}
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    }
    else {
      content = <Router>
        <div className="container border-left border-right border-dark">
          <div className="row">

            {/* Login control */}
            <LoginControl onClick={this.clickHendler} />
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
