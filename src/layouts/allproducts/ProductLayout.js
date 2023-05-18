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

  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.productImage}
          title={product.productName}
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography>{product.productName }</Typography>
          <Typography>Stock Count: {product.AvailableQuantity}</Typography>
          <Typography>Price: {product.price}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <SaveProductButton product={product} />
        </CardActions>
      </Card>
    </div>
  );
}