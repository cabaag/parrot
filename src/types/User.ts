import { Store } from './Store';

export const SET_USER_STORES = 'SET_USER_STORES';
export const SET_USER = 'SET_USER';
export const USER_ERROR = 'USER_ERROR';

export type UserState = {
  email?: string;
  username?: string;
  stores: Store[];
  error?: boolean;
}
