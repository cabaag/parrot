import { Dispatch } from 'redux';
import axios from '../config/axiosConfig';
import { Category, Product, Store } from '../types/Store';
import { SET_USER_STORES } from '../types/User';
import StoreService from './StoreService';

const storeService = new StoreService()

export default class UserService {

  myStores = (): any => (dispatch: Dispatch): any =>
    axios.get('api/v1/users/me')
      .then((res: any) => res.result?.stores)
      .then((stores: Store[]) => {
        const promises = stores.map(store => storeService.allProducts(store.uuid))
        Promise.all(promises).then(results => {
          results.forEach((products, index) => {
            const categories: Category[] = []
            // eslint-disable-next-line no-param-reassign
            stores[index].products = products.map((product: Product) => {
              const indexCategory = categories.findIndex(c => c.uuid === product.category.uuid)
              if (indexCategory === -1) {
                categories.push({
                  ...product.category
                })
              }

              return {
                ...product,
                store: stores[index].uuid
              }
            })
            // eslint-disable-next-line no-param-reassign
            stores[index].categories = categories
          })
          dispatch({
            type: SET_USER_STORES,
            payload: stores
          })
        })
      })
}