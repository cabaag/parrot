import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/index';

const middlewares = [thunk, logger]

const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
);

const store = createStore(reducers, enhancer);

export default store;
