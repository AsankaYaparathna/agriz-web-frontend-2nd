import React, { useEffect } from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductLayout from '../layouts/allproducts/ProductLayout';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../store/actions/productsAction';

export default function AllProducts() {
  const dispatch = useDispatch();
  const { getAllProductsListLoading, allProducts } = useSelector(
    (store) => store.productsReducer
  );

  useEffect(() => {
    if (getAllProductsListLoading === 'notStarted') {
      dispatch(getAllProducts());
    }
  }, [dispatch, getAllProductsListLoading]);

  return (
    <div>
      <CommonLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <NavLink style={{ textDecoration: 'none' }} to={`/allproducts`}>
            <div>All</div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/vegetable`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              Vegetable
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/fruit`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>Fruit</div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to={`/other`}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              Other Products
            </div>
          </NavLink>
        </div>

        <Grid
          container
          justifyContent="center"
          spacing={4}
          pl={4}
          pr={4}
          pt={5}
        >
          {getAllProductsListLoading === 'loading' ? (
            <p>Loading...</p>
          ) : getAllProductsListLoading === 'fail' ? (
            <p>Failed to load products.</p>
          ) : (
            allProducts.map((product, index) => (
              <Grid item xs={2} key={index}>
                <ProductLayout product={product} />
              </Grid>
            ))
          )}
        </Grid>
      </CommonLayout>
    </div>
  );
}
