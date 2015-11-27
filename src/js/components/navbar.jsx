'use strict';
import React from 'react';
import {Link} from 'react-router';
const NavBar = React.createClass({
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="">Orphans</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="login">Login</Link></li>
              <li><a href="">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
})

export default NavBar;
