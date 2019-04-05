import React, { Component } from 'react';
import logo from './assets/images/logo.png';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      ipAddress: "",
    };
  }

  componentWillMount() {
    this.getIpAddress();
  }

  render() {
    return (
      <div className="container p-0 mt-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-top">
          <a className="navbar-brand font-italic" href="/">
            <img src={logo} width="40" height="40" className="d-inline-block align-bottom mr-2" alt="" />
            Admin pannel
        </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <span className="navbar-text d-inline-block align-bottom">
              {this.state.ipAddress}
            </span>
          </div>
        </nav>
      </div>
    );
  }

  /**
   * Get locale IP address from geoip-db.com service
   */
  getIpAddress() {
    const API = 'https://geoip-db.com/json';
    const CORS = 'https://cors.io/?'; // Temporary solution CORS problem

    fetch(CORS + API)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error('Something went wrong ... :' + response);
        }
      })
      .then(data => {
        this.setState({ ipAddress: data.IPv4 });
      })
      .catch(error => console.log(error));
  }
}
export default Header;
