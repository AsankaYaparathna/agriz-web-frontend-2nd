import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductLayout from '../layouts/allproducts/ProductLayout';
import { Grid } from '@mui/material';

export default function AllProducts() {
  return (
    <div>
      <CommonLayout>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          pl={4}
          pr={4}
          pt={5}
        >
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
          <Grid item xs={2}>
            <ProductLayout />
          </Grid>
        </Grid>
      </CommonLayout>
    </div>
  );
}
