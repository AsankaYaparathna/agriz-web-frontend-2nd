import axios from 'axios';

export const GET_ALL_PRODUCTS_LOADING = 'GET_ALL_PRODUCTS_LOADING';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_FAIL = 'GET_ALL_PRODUCTS_FAIL';

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS_LOADING });
    axios
      .get('http://localhost:5001/products/get-all')
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_PRODUCTS_SUCCESS,
          payload: response.data.products,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: GET_ALL_PRODUCTS_FAIL });
      });
  };
};

export const saveProduct = (productData) => {
  return (dispatch) => {
    axios
      .post('http://localhost:5001/products/save', productData)
      .then((response) => {
        console.log(response.data);
        // Handle success if needed
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };
};
