import * as Actions from '../actions/productsAction';

const initialState = {
  getAllProductsListLoading: 'notStarted',
  allProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_PRODUCTS_LOADING:
      return { ...state, getAllProductsListLoading: 'loading' };

    case Actions.GET_ALL_PRODUCTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllProductsListLoading: 'success',
        allProducts: action.payload,
      };

    case Actions.GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        getAllProductsListLoading: 'fail',
        allProducts: [],
      };

    default:
      return state;
  }
};

export default productsReducer;
