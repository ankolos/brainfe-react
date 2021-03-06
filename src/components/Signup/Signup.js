import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PostData } from '../../services/PostData';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  signup(e) {
    e.preventDefault();
    if (this.state.username && this.state.password && this.state.email && this.state.name) {
      PostData('signup', this.state).then((result) => {
        let responseJson = result;

        if (responseJson.userData) {
          sessionStorage.setItem('userData', JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/'} />)
    }

    return (
      <div className="container">
        <div className="row justify-content-center m-2">
          <form onSubmit={this.signup} className="form-group border rounded p-4">
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label for="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" name="name" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.onChange} />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
  </label>
            </div>
            <button type="submit" className="btn btn-outline-dark">Signup</button>
            <Link className="btn btn-outline-dark ml-2" to="/login">Login</Link>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
