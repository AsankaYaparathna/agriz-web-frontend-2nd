import { combineReducers } from 'redux';
import sellerReducer from './sellerReducer';

const rootReducer = combineReducers({
  sellerReducer,
});

export default rootReducer;
