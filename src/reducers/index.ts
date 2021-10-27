import { combineReducers } from 'redux';
import { UserState } from '../types/User';
import authReducer, { AuthState } from './AuthReducer';
import userReducer from './UserReducer';

export type RootState = {
  user: UserState;
  auth: AuthState;
};

export default combineReducers({
  auth: authReducer,
  user: userReducer
});
