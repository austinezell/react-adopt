'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app.jsx';

// var test = React.createClass({
//   render () {
//     return <div>Test</div>
//   }
// })

ReactDom.render(
  <App/>,
  document.getElementById('react-node')
)
