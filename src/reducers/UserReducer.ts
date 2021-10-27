import { SIGN_OUT } from '../types/Auth'
import { UPDATE_PRODUCT } from '../types/Store'
import { SET_USER, SET_USER_STORES, UserState, USER_ERROR } from '../types/User'

const INITIAL_STATE: UserState = {
  stores: [],
}

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_USER_STORES:
      return {
        ...state,
        stores: action.payload,

      }
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        stores: state.stores.map(store => {
          if (store.uuid === action.payload.store) {
            const products = store.products.map(product =>
              product.uuid === action.payload.uuid ? { ...action.payload } : product
            )
            return {
              ...store,
              products
            }
          }
          return store
        })
      }
    case SIGN_OUT: {
      return {
        stores: []
      }
    }
    case USER_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default userReducer
