import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Map from './Map';
import Paper from '@mui/material/Paper';

const ProductViewSellerDescription = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, border: '1px solid #ccc' }}>
          <Typography variant="h6">Seller Details</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Seller Name: Apphuhami Sumanapala
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Seller Address: No 1/5 Sisuranga Panagoda Homagama
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ height: '433px', width: '347px' }}>
        <Paper>
          <Map />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductViewSellerDescription;
