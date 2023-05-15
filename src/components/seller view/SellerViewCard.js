import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProfilePicture from './SellerViewProfilePicture';
import Rating from './Rating';

const ProductDescription = () => {
  return (
    <Grid container spacing={2}>
      <Paper
        sx={{
          p: 2,
          border: '1px solid #ccc',
          width: '1000px',
          height: '300px',
          backgroundColor: 'rgba(217, 217, 217, 0.1)',
        }}
      >
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <ProfilePicture />
          </Grid>
          <Grid item pl={2} pt={2}>
            <h1>Gotabaya Rajapaksa</h1>
          </Grid>
          <Grid item pl={2} pt={2}>
            <Rating />
            <Grid>RATE</Grid>
            <Grid> 75D Mirihana Rd, Nugegoda 10250</Grid>
            <Grid>0710905333</Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProductDescription;
