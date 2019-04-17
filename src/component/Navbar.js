import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="col-2 border border-dark rounded m-2">
        <nav className="navbar navbar-light">
          <ul className="navbar-nav">
            <NavItem
              id="collapsibleNavbarHome"
              page="Home"
              path="/"
              links={["homelink1", "homelink2", "homelink3"]} />
            <NavItem
              id="collapsibleNavbarSearch"
              page="Search"
              path="/search"
              links={["searchlink1", "searchlink2", "searchlink3"]} />
            <NavItem
              id="collapsibleNavbarAbout"
              page="About"
              path="/about"
              links={["aboutlink1", "aboutlink2", "aboutlink3"]} />
          </ul>
        </nav>
      </div>
    );
  }
}

class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <div className="container">
          <div className="row">
            <div className="col-8 border border-dark">
              <Link className="nav-link mr-2" to={this.props.path}>{this.props.page}</Link>
            </div>
            <div className="col-4 border border-dark p-0">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={"#" + this.props.id}>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id={this.props.id}>
          <ul className="navbar-nav">
            {this.props.links.map((v, k) =>
              <li className="nav-item">
                <a className="nav-link" href="#">{v}
                </a>
              </li>)}
          </ul>
        </div>
      </li>
    );
  }
}
export default Navbar;
