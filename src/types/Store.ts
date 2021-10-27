
export const SET_STORE_PRODUCTS = 'SET_STORE_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const STORE_ERROR = 'STORE_ERROR';

export enum AVAILABILITY {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE'
}

export type Category = {
  uuid: string;
  name: string;
  sortPosition: number;
  products: Product[]
}

export type Product = {
  uuid: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  availability: AVAILABILITY;
  category: Category;
  store: string;
}

export type Store = {
  uuid: string,
  name: string;
  availabilityState: string;
  config: {
    brandColor: string;
  }
  products: Product[]
  categories: Category[]
}

export type StoreState = {
  stores: Store[];
}