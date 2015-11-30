'use strict';

import React from 'react';
import UserActions from '../actions/userActions';
import UserStore from '../stores/userStore';
import Pets from './pets.jsx';

const Profile = React.createClass({
  getInitialState (){
    return{
      username: "",
      pets: [],
      dateJoined: "",
      email: "",
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
    console.log(this.state);
    let pets = this.state.pets.map(pet=>{
      return
      <li>
        {pet.name} <a>View Pet Details</a>
      </li>
    })
    return (
      <div className='row'>
        <div className='col-md-6 col-sm-6 col-lg-6 col-xs-12'>
          <h1>Welcome, {this.state.username}</h1>
        </div>
        <div className='col-md-6 col-sm-6 col-lg-6 col-xs-12'>
          <ul>
            {pets}
          </ul>
        </div>
      </div>
    )
  }
})

export default Profile
