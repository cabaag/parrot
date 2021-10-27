import {
  Dispatch
} from 'redux'
import UserService from '../services/UserService'

const userService = new UserService()

// eslint-disable-next-line import/prefer-default-export
export const getMyStores = () => (
  dispatch: Dispatch
): void => {
  dispatch(userService.myStores())
}

