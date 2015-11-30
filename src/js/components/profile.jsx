'use strict';

import React from 'react';
import UserActions from '../actions/userActions';
import UserStore from '../stores/userStore';
import Pets from './pets';


const Profile = React.createClass({
  getInitialState (){
    return{
      username: "",
      pets: [],
      dateJoined: "",
      email: ""
    }
  },
  onChange () {
    let userData = UserStore.returnUserInfo()
    this.setState(userData)
  },
  componentDidMount () {
    UserActions.getCurrentUserDetails();
    UserStore.addChangeListener(this.onChange)
  },
  render () {
    return (
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-lg-6 col-xs-12'>
          <h1>Welcome, {this.state.username}</h1>
        </div>
        <div className='col-md-6 col-sm-6 col-lg-6 col-xs-12'>

        </div>
      </div>
    )
  }
})

export default Profile
