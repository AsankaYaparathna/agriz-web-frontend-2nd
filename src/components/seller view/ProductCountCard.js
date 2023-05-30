import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

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

const ProducCountCard = () => {
  const [products, setProducts] = useState([]);
 // const [category, setCategory] = useState([]);
  const [fruits, setFruits] = useState(0);
  const [others, setOthers] = useState(0);
  const [vegitables, setVegitables] = useState(0);
  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];

  
  useEffect(() => {
    const GetProductData = async () => {
      try {
       const responce = await CallAPI({}, `/products/user-produts-count/${savedSeller._id}`, "GET");
        
        if (responce) {
          setFruits(responce.fruitCount);
          setVegitables(responce.vegCount);
          setOthers(responce.otherCount);

        } else { console.error('data fetch error ',`/products/user-produts-count/${savedSeller._id}`); }
      } catch (error) { console.error('Error:', error); }
    };
    GetProductData();
  }, []);

  return (
    <Grid item xs={12}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h2>Total Product</h2>
            <span style={{ fontSize: '50px' }}>{fruits+vegitables+others}</span>
          </Grid>
          <Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{fruits}</h2>
              <h5>Fruits</h5>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{vegitables}</h2>
              <h5>Vegitable</h5>
            </Grid>
          </Grid><Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{others}</h2>
              <h5>Others</h5>
            </Grid>
          </Grid>
          
        </Grid>
      </Item>
    </Grid>
  );
};

export default ProducCountCard;
