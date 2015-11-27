import {Router, Route, Link} from 'react-router';
import Login from './components/login.jsx';
import Register from './components/register.jsx';


render((
  <Router>
    <Route path='/' component ={App}>
      <Route path='login' compononent={Login}/>
      <Route path='register' compononent={Register}/>
      <Route path='users' compononent={Users}>
        <Route path='users/:username' component={User}/>
      </Route>
      <Route path='pets' components={Pets}>
        <Route path='pets/:petname' component={Pet}/>
      </Route>
    </Route>
  </Router>
), document.body);
