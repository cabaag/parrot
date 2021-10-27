import axios from '../config/axiosConfig';
import { Product } from '../types/Store';

export default class StoreService {

  allProducts = (storeId: string): Promise<Product[]> =>
    axios.get(`api/v1/products/?store=${storeId}`).then((res: any) => res.results)
}