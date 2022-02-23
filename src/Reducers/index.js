import * as actionTypes from './types';
import { combineReducers } from 'redux';

const initial_user_state = {
  authStatus: false,
  userDetails: {},
  accessToken: '',
};

const user_reducer = (state = initial_user_state, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload.authStatus,
      };
    case actionTypes.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
      };
    case actionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer,
});

export default rootReducer;
