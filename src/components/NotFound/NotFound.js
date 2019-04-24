import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center m-2">
          <div className="col">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p className="error-details">Sorry, an error has occured, Requested page not found!</p>
            <a href="/" className="btn btn-outline-dark">Take Me Home </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFound;
