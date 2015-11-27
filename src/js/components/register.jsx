'use strict';
import React from 'react';
import {Link} from 'react-router';

const Register = React.createClass({
  render () {
    return (
      <div className='col-md-6 login'>
        <form id='login'>
          <div className='form-group'>
            <label htmlFor='name'>Name</label><br/>
            <input type='text' placeholder='Name' ref='name' id='name'/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label><br/>
            <input type='text' placeholder='Email' ref='email' id='email'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label><br/>
            <input type='password' placeholder='Password' ref='password' id='password'/>
          </div>
          <div className='form-group'>
            <label htmlFor='confimr'>Confirm Password</label><br/>
            <input type='password' placeholder='Password' ref='password' id='password'/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn-primary'>Login</button>
          </div>
        </form>
        <div>
          Already have an account? Click <Link to='register'>here to login</Link>
        </div>
      </div>
    )
  }
})

export default Register
