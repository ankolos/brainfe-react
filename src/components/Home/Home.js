import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="col border border-dark rounded mt-2 mr-2 mb-2 p-0">
          <p>Home</p>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
