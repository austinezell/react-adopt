import $ from 'jquery';
import UserDispatcher from '../dispatchers/userDispatcher.js';
import Actions from './actionTypes';

const errorHandler = (err) => {
  UserDispatcher.dispatch({
    actionType: Actions.USER.ERROR,
    err
  })
}

export default {
  register (user) {
    $.post('/users/register', user)
    .success(function(user){
      UserDispatcher.dispatch({
        actionType: Actions.USER.REGISTER,
        user
      })
    })
    .error(function(err){
      errorHandler(err)
    })
  },
  login (user) {
    $.post('/users/login', user)
    .success(function(data){
      UserDispatcher.dispatch({
        actionType: Actions.USER.LOGIN,
        user
      })
    })
    .error(function(err){
      errorHandler(err)
    })
  }
}
