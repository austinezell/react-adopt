import {Router, Route, Link} from 'react-router';

import Login from './components/login.jsx';
import


export default = React.createClass({
  <Router>
    <Route path='login' compononent={Login}/>
    <Route path='users' compononent={Users}/>
    <Route path='user/:username' compononent={User}/>

  </Router>
})
