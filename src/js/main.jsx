'use strict'

import React from 'react'
import {Router, Route, Link} from 'react-router';
import {render} from 'react-dom';
import App from './components/app.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Pet from './components/pet.jsx';
import Pets from './components/pets.jsx';
import Profile from './components/profile.jsx';
import Users from './components/users.jsx';
import User from './components/user.jsx';

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='login' component={Login}/>
      <Route path='register' component={Register}/>
      <Route path='users' component={Users}>
        <Route path='users/:username' component={User}/>
      </Route>
      <Route path='pets' component={Pets}>
        <Route path='pets/:petname' component={Pet}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('react-node'));
