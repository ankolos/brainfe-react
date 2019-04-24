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
      <div className="secondery off-canvas position-left reveal-for-large " id="my-info" data-off-canvas data-position="left">
        <div className="row column">
          <button type="button" className="button" onClick={this.logout}> Logout</button>
        </div>
      </div>
    );
  }
}

export default Logout;