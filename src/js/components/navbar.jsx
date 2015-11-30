'use strict';
import React from 'react';
import {Link} from 'react-router';
const NavBar = React.createClass({
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Orphans</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li role="separator" className="divider"></li>
                  <li><Link to='Profile'>Profile</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to='Pets'>View Pets</Link></li>
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
