import { combineReducers } from 'redux';
import sellerReducer from './sellerReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  sellerReducer,
  productsReducer,
});

export default rootReducer;
