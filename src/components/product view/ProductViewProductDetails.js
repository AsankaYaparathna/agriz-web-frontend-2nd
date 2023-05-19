import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ProductDescription = () => {
  
  const DetailedProductString = sessionStorage.getItem("DetailedProduct");
  const savedProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];

  return (
    <Grid container spacing={2}>
      <Paper sx={{ p: 2, border: '1px solid #ccc', width: '450px' }}>
        <Typography variant="h5" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="body1">
          Stock : {savedProducts.availableQuantity}
          <br></br>
          Price : {savedProducts.price} RS
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ProductDescription;
 