'use strict';
import React from 'react';
import {Link} from 'react-router';
import UserActions from '../../actions/userActions.js';

const Login = React.createClass({
  login (event) {
    event.preventDefault()
    let user = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    UserActions.login(user);
  },
  render () {
    return (
      <div className='col-md-offset-3 col-md-6 login'>
        <form onSubmit={this.login} id='login'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label><br/>
            <input type='text' placeholder='Name' ref='username' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label><br/>
            <input type='password' placeholder='Password' ref='password' id='password'/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn-primary'>Login</button>
          </div>
        </form>
        <div>
          No account? Register <Link to='register'>here</Link>
        </div>
        <Link to="me">Development purpose</Link>
      </div>
    )
  }
})

export default Login
