import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container bg-dark rounded-bottom">
        <div
          className="text-center text-muted"
          id="copyright">&copy; 2019 {new Date().getFullYear() > 2019 ? "- " + new Date().getFullYear() : ""} React Bootstrap 4 </div>
      </div>
    );
  }
}
export default Footer;
