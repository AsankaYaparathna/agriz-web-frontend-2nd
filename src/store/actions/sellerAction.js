import axios from 'axios';

export const GET_ALL_SELLERS_LOADING = 'GET_ALL_SELLERS_LOADING';
export const GET_ALL_SELLERS_SUCESS = 'GET_ALL_PATIENTS_SUCESS';
export const GET_ALL_SELLERS_FAIL = 'GET_ALL_PATIENTS_FAIL';

export const getAllSellers = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_SELLERS_LOADING });
    axios
      .get('http://localhost:5001/seller/get-all')
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_SELLERS_SUCESS,
          payload: response.data.seller,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_SELLERS_FAIL });
      });
  };
};
