import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import SaveProductButton from '../../components/allproducts/SaveProductButton';
import { Log } from '../../services/Log';

export default function ProductLayout({ product }) {

  const handleImageClick =() =>{
    sessionStorage.setItem('DetailedProduct', JSON.stringify(product));
    window.location.href = '/productview';
  }
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        
      <div onClick={handleImageClick}>
  <CardMedia
    sx={{ height: 140 }}
    image={product.productImage}
    title={product.productName}
  />
</div>

        <CardContent sx={{ textAlign: 'left' }}>
          <Typography>{product.productName }</Typography>
          <Typography>Stock Count: {product.availableQuantity}</Typography>
          <Typography>Price: {product.price}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <SaveProductButton product={product}/>
        </CardActions>
      </Card>
    </div>
  );
}