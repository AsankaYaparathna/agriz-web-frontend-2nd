import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import SearchBar from '../components/all seller/SellerSearch';
import { Grid } from '@mui/material';
import ProductCard from '../layouts/product/ProductCard';
import { NavLink } from 'react-router-dom';

export default function FruitProducts() {
  return (
    <div>
      <CommonLayout>
        <div style={{ paddingTop: 10 }}>
          <SearchBar />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px',
            }}
          >
            <NavLink style={{ textDecoration: 'none' }} to={`/allproducts`}>
              <div>All </div>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`/vegetable`}>
              <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                Vegetable
              </div>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`/fruit`}>
              <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                Fruit
              </div>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`/other`}>
              <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                Other Products
              </div>
            </NavLink>
          </div>

          <Grid container justifyContent="center" pt={3}>
            <Grid item xs={2}>
              <ProductCard />
            </Grid>
            <Grid item xs={2}>
              <ProductCard />
            </Grid>
            <Grid item xs={2}>
              <ProductCard />
            </Grid>
            <Grid item xs={2}>
              <ProductCard />
            </Grid>
            <Grid item xs={2}>
              <ProductCard />
            </Grid>
          </Grid>
        </div>
      </CommonLayout>
    </div>
  );
}
