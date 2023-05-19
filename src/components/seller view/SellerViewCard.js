import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import ProfilePicture from './SellerViewProfilePicture';
import Rating from './Rating';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ProductDescription = () => {
  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];
  return (
    <Grid container spacing={2} >
   
          <Grid item xs={12}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6}><ProfilePicture /></Grid>
                <Grid item xs={6}>
                  <h1>{savedSeller.sellerFirstName + " " + savedSeller.sellerLastName}</h1>
                  <Rating />
                  <Grid>RATE</Grid>
                  <Grid>{savedSeller.sellerAdddress}</Grid>
                  <Grid>{savedSeller.sellerContactNumber}</Grid>
                </Grid>
              </Grid>
            </Item>
          </Grid>
       

        </Grid>


  );
};

export default ProductDescription;
