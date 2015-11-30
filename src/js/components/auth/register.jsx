'use strict';
import React from 'react';
import {Link} from 'react-router';
import UserActions from '../../actions/userActions.js';
import { createHistory, useBasename } from 'history';

const Register = React.createClass({
  register (event) {
    event.preventDefault()
    let user = {
      username: this.refs.username.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    if (user.password !== this.refs.confirm.value) alert('Passwords Do Not Match!')
    else UserActions.register(user);
  },
  render () {
    return (
      <div className='col-md-6 col-md-offset-3 login'>
        <form id='register' name='user' onSubmit={this.register}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label><br/>
            <input required type='text' placeholder='Name' ref='username' name='name' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label><br/>
            <input required type='text' placeholder='Email' ref='email' id='email' name='email'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label><br/>
            <input required type='password' placeholder='Password' ref='password' name='password' id='password'/>
          </div>
          <div className='form-group'>
            <label htmlFor='confirm'>Confirm Password</label><br/>
            <input required type='password' placeholder='Confirm Your Password' ref='confirm' name='confirm' id='confirm'/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn-primary'>Register</button>
          </div>
        </form>
        <div>
          Already have an account? Click <Link to='login'>here to login</Link>
        </div>
      </div>
    )
  }
})

export default Register
