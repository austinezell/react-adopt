import $ from 'jquery';
import AppDispatcher from '../AppDispatcher.js';
import Actions from './actionTypes';

const ACTIONS = Actions.USER

const errorHandler = (err) => {
  AppDispatcher.dispatch({
    actionType: ACTIONS.ERROR,
    err
  })
}

export default {
  register (user) {
    $.post('/users/register', user)
    .success(function(user){
      console.log(user);
      AppDispatcher.dispatch({
        actionType: ACTIONS.REGISTER,
        user
      })
    })
    .error(function(err){
      errorHandler(err)
    })
  },
  login (user) {
    $.get('/users/login')
    .success(function(user){
      AppDispatcher.dispatch({
        actionType: ACTIONS.LOGIN,
        user
      })
      .error(function(err){
        errorHandler(err)
      })
    })
  }
}
