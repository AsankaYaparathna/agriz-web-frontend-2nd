import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Log } from '../../services/Log';

import Cookies from "js-cookie";


export default function ContainedButtons(product) {

  const [savedProducts, setSavedProducts] = useState([]);
 Log('ContainedButtons');
 Log(product);
  const SaveProduct = () => {
    const savedProductString = sessionStorage.getItem("SavedProduct");
    const savedProducts = savedProductString ? JSON.parse(savedProductString) : [];
  
    const isProductExists = savedProducts.some((savedProduct) => savedProduct.product.id === product.product.id);
  
    if (isProductExists) {
      console.log('Product already exists:', product);
      return;
    }
  
    const updatedProducts = [...savedProducts, product];
    sessionStorage.setItem('SavedProduct', JSON.stringify(updatedProducts));
    setSavedProducts(updatedProducts);
    
  };
  

  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={SaveProduct}
        variant="contained"
        startIcon={<FavoriteIcon />}
        style={{
          backgroundColor: 'rgba(81, 146, 89, 0.34)',
          color: 'rgba(92, 90, 90, 1)',
        }}
      >
        Save
      </Button>
    </Stack>
  );
}
