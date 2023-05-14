import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ProductDescription = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, border: '1px solid #ccc' }}>
          <Typography variant="h5" gutterBottom>
            Product Description
          </Typography>
          <Typography variant="body1">
            The carrot (Daucus carota) is a root vegetable often claimed to be
            the perfect health food. It is crunchy, tasty, and highly
            nutritious. Carrots are a particularly good source of beta carotene,
            fiber, vitamin K1, potassium, and antioxidants.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, border: '1px solid #ccc' }}>
          <Typography variant="h5" gutterBottom>
            Product Details
          </Typography>
          <Typography variant="body1">
            <strong>Stock:</strong> 500KG
            <br />
            <strong>Price:</strong> RS 1000
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
