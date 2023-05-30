import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProductLayout from '../layouts/allproducts/ProductLayout';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import CommonLayout from '../layouts/common/CommonLayout';
import SellerViewCard from '../components/seller view/SellerViewCard';
import SellerViewSearch from '../components/seller view/SellerViewSearch';
import ProducCountCard from '../components/seller view/ProductCountCard';

import { Log } from '../services/Log';
import { CallAPI } from '../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SellerViewPage() {
  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];
  const [sellerDetails, setSellerDetails] = useState([]);
  const [sellerProduct, setSellerProduct] = useState([]);
  const [sellerProductbk, setSellerProductBk] = useState([]);
  const [searchValue, setSearchChange] = useState([]);

  useEffect(() => {
    //get all product
    const GetProductData = async () => {
      try {
        const responce = await CallAPI({}, `/products/user-produts/${savedSeller._id}`, "GET");
        if (responce && responce.status) {
          setSellerProduct(responce.data);
          setSellerProductBk(responce.data);
        } else { console.error('data fetch error /user-produts'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetProductData();
  }, []);

  const handleSearchChange = (value) => {
    setSearchChange(value);
    if (value !== '') {
      const filteredProducts = sellerProductbk.filter((product) =>
        product.productName.toLowerCase() === value.toLowerCase()
      );
      setSellerProduct(filteredProducts);
    }
    else{
      setSellerProduct(sellerProductbk);
    }


  };

  return (
    <div>
      <CommonLayout>
        {/* <br></br>
        <SellerViewSearch />
        <SellerViewCard /> */}


        <Grid container spacing={3} style={{ marginTop: '50px', width: '90%', marginLeft: '5%' }}>
          <Grid item xs={7}>

            <SellerViewCard />

          </Grid>
          <Grid item xs={5}>
            <Grid style={{ marginBottom: '20px' }}>
              <SellerViewSearch onSearchChange={handleSearchChange}/>
            </Grid>
            <Grid style={{ marginBottom: '20px' }}>
              <ProducCountCard />
            </Grid>
          </Grid>

        </Grid>

        <Grid container spacing={3} style={{ width: '90%', marginLeft: '5%' }}>
          <Grid item xs={12}>
            <h2>Seller Product</h2>
            <Grid container spacing={3} style={{alignItems:'center',justifyContent:'center',marginBottom:'50px'}}>
              {sellerProduct.map((product) => (
                <Grid item xs={2}>
                  <ProductLayout product={{
                    productImage: product.productImage,
                    productName: product.productName,
                    availableQuantity: product.availableQuantity,
                    price: product.price,
                    id: product._id,
                    sellerId: product.sellerId,
                    description: product.description
                  }} />
                </Grid>
              ))}
            </Grid>
          </Grid>


        </Grid>
      </CommonLayout>
    </div>
  );
}
