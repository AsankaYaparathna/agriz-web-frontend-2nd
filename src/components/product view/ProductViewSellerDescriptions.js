import React from 'react';
import {
  // Grid,
  Typography,
} from '@material-ui/core';
import Map from './Map';
import Paper from '@mui/material/Paper';

const ProductViewSellerDescription = () => {
  return (
    <div>
      {/* <Paper sx={{ p: 2, border: '1px solid #ccc', width: '300px' }}>
        <Typography variant="h6">Seller Details</Typography>
      </Paper> */}
      <Paper sx={{ p: 2, border: '1px solid #ccc', width: '300px' }}>
        <Typography variant="subtitle1">
          Seller Name: Apphuhami Sumanapala
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, border: '1px solid #ccc', width: '300px' }}>
        <Typography variant="subtitle1">
          Seller Address: No 1/5 Sisuranga Panagoda Homagama
        </Typography>
      </Paper>
      <Paper sx={{ width: '310px' }}>
        <Map />
      </Paper>
    </div>
  );
};

export default ProductViewSellerDescription;
