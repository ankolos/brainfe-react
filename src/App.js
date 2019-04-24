import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './routes';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
