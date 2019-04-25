import React, { Component } from 'react';
import { Redirect, Link} from 'react-router-dom';

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
    return (
      <li className="nav-item">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Link to="/login" className="nav-link mr-2" onClick={this.logout}>Logout</Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default Logout;