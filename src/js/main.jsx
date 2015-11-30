'use strict'

import React from 'react'
import {Router, Route, Link} from 'react-router';
import {render} from 'react-dom';
import App from './components/app.jsx';
import Login from './components/auth/login.jsx';
import Register from './components/auth/register.jsx';
import Pets from './components/pets/pets.jsx';
import Profile from './components/users/profile.jsx';
import Users from './components/users/users.jsx';
import User from './components/users/user.jsx';

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
      <Route path='me' component={Profile}/>
      <Route path='pets' component={Pets}/>

    </Route>
  </Router>
), document.getElementById('react-node'));


// <Route path='users' component={Users}>
//   <Route path='users/:username' component={User}/>
// </Route>
// <Route path='pets' component={Pets}>
//   <Route path='pets/:petname' component={Pet}/>
// </Route>
