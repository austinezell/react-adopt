import UserDispatcher from "../dispatchers/userDispatcher.js";
import ActionTypes from '../actions/actionTypes.js';
import {EventEmitter} from 'events';

const CHANGE = "CHANGE"

class UserEmitter extends EventEmitter {
  emitChange () {
    this.emit(CHANGE);
  }
  addChangeListener(cb) {
    this.on(CHANGE, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(CHANGE, cb);
  }

}


const UserStore = new UserEmitter();

UserDispatcher.register(action => {
  console.log(typeof action.actionType, action.actionType);
  switch (action.actionType) {
  case "LOGIN" :
    
    break;
  }
})
export default UserStore;
