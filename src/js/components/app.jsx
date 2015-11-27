'use strict'
import React from 'react'
import {render} from 'react-dom'
import NavBar from './navbar.jsx'
import {Router, Route, Link} from 'react-router';

const App = React.createClass({
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
