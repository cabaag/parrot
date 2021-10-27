import {
  Dispatch
} from 'redux';
import axios from '../config/axiosConfig';
import { AVAILABILITY, UPDATE_PRODUCT } from '../types/Store';


// eslint-disable-next-line import/prefer-default-export
export const updateProduct = (storeId: string, productId: string, availability: AVAILABILITY): any => (
  dispatch: Dispatch
): void => {
  axios.put(`api/v1/products/${productId}/availability`, {
    availability,
  }).then((res: any) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        ...res.result,
        store: storeId
      }
    })
  })
}

