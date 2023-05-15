import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductViewImage from '../components/product view/ProductViewImage';
import ProductDescription from '../components/product view/ProductViewDescription';
import ProductViewSellerDescription from '../components/product view/ProductViewSellerDescriptions';
import ProductViewSaveButton from '../components/product view/ProductViewSaveButton';
import ProductViewContact from './../components/product view/ProductViewContactNumber';
import ProductDetails from '../components/product view/ProductViewProductDetails';
import { Grid, Divider } from '@mui/material';

export default function ProductViewPage() {
  return (
    <div>
      <CommonLayout>
        <Grid container justifyContent="center" spacing={5} pt={5}>
          <Grid item>
            <ProductViewImage />
          </Grid>
          <Grid item>
            <ProductDescription />
            <br />
            <ProductDetails />
          </Grid>
          <Grid item>
            <ProductViewSellerDescription />
          </Grid>
        </Grid>

        <ProductViewSaveButton />
        <ProductViewContact />
        <Divider />
        <h1>Suggested Products</h1>
      </CommonLayout>
    </div>
  );
}
