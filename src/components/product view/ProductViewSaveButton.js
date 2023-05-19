import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'rgba(81, 146, 89, 1)',
    color: '#fff',
    width: 208,
    height: 45,
    '&:hover': {
      backgroundColor: 'rgba(81, 146, 89, 0.8)',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ProductViewSaveButton = () => {

  const SaveProduct = () => {
    const DetailedProductString = sessionStorage.getItem("DetailedProduct");
    const DetailProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];

    const savedProductString = sessionStorage.getItem("SavedProduct");
    const savedProducts = savedProductString ? JSON.parse(savedProductString) : [];

    const isProductExists = savedProducts.some((savedProduct) => savedProduct.product.id === DetailProducts.id);

   
    if (isProductExists) {
      console.log('Product already exists:', DetailProducts);
      return;
    }
  
    const updatedProducts = [...savedProducts, {product :DetailProducts}];
    sessionStorage.setItem('SavedProduct', JSON.stringify(updatedProducts));
    //setSavedProducts(updatedProducts);
  }
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button} onClick={SaveProduct}>
      <FavoriteIcon className={classes.icon} />
      SAVE
    </Button>
  );
};

export default ProductViewSaveButton;
