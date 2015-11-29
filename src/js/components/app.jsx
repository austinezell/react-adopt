'use strict'
import React from 'react';
import {render} from 'react-dom';
import NavBar from './navbar.jsx';
import {Router, Route} from 'react-router';

import UserStore from '../stores/userStore.js'

const App = React.createClass({
  onChange () {
    this.setState({})
  },
  componentDidMount(){
  },
  render () {
    return (
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
})

export default App;
