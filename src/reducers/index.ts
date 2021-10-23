import { combineReducers } from 'redux';
import authReducer, { AuthState } from './AuthReducer';
import userReducer, { UserState } from './UserReducer';

export type RootState = {
  user: UserState;
  auth: AuthState;
};

export default combineReducers({
  user: userReducer,
  auth: authReducer,
});
