import * as Actions from '../actions/sellerAction';

const inisialState = {
  getAllSellerListLoading: 'notStarted',
  allSellers: [],
};

const sellerReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_SELLERS_LOADING:
      return { ...state, getAllFeedbackListLoading: 'loading' };

    case Actions.GET_ALL_SELLERS_SUCESS:
      console.log(action.payload);
      return {
        ...state,
        getAllSellerListLoading: 'sucess',
        allSellers: action.payload,
      };

    case Actions.GET_ALL_SELLERS_FAIL:
      return {
        ...state,
        getAllSellerListLoading: 'fail',
        allSellers: [],
      };

    default:
      return state;
  }
};

export default sellerReducer;
