import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PostData } from '../../services/PostData';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login(e) {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      PostData('login', this.state).then((result) => {
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
          <form className="was-validated border rounded p-4" onSubmit={this.login}>
            <div className="form-group">
              <label for="username">Username:</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={this.onChange} required />
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.onChange} required />
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
      </label>
            </div>
            <button type="submit" className="btn btn-outline-dark">Login</button>
            <Link className="btn btn-outline-dark ml-2" to="/signup">Signup</Link>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
