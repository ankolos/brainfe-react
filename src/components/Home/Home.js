import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Logout from '../../components/Logout/Logout';

class Home extends Component {
  constructor(props) {
    super(props);

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
