import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.searchContent = [];
    this.state = {
      redirectToReferrer: false
    };
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {

    }
    else {
      this.setState({ redirectToReferrer: true });
    }
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center m-2">
          <div className="col">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <p className="error-details">Sorry, an error has occured, Requested page not found!</p>
            <Link to="/" className="btn btn-outline-dark">Take Me Home </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFound;
