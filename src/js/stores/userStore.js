import UserDispatcher from "../dispatchers/userDispatcher.js";
import ActionTypes from '../actions/actionTypes.js';
import {EventEmitter} from 'events';

const CHANGE = "CHANGE"

let user;

class UserEmitter extends EventEmitter {
  returnUserInfo () {
    return user
  }
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
  switch (action.actionType) {
    case "LOGIN":

    break;
    
    case "ME":
    user = action.user;
    UserStore.emitChange();
    break;
  }
})
export default UserStore;
