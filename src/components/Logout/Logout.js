import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/login'} />)
    }
    return (
      <li className="nav-item">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <a className="nav-link mr-2" onClick={this.logout}>Logout</a>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default Logout;