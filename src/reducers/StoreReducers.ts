import { SET_STORE_PRODUCTS, StoreState, STORE_ERROR } from '../types/Store'


const INITIAL_STATE: StoreState = {
  stores: [],
}

const storeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_STORE_PRODUCTS:
      return {
        ...state,
        stores: state.stores.map(store => store.uuid === action.payload.store ? { ...store, products: action.payload.products } : store)
      }
    case STORE_ERROR:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default storeReducer
