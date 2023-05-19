import React,{useEffect,useState} from 'react';
import {Typography} from '@material-ui/core';
import Map from './Map';
import Paper from '@mui/material/Paper';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


const ProductViewSellerDescription = () => {
  const DetailedProductString = sessionStorage.getItem("DetailedProduct");
  const savedProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];
  const [sellerDetails, setSellerDetails] = useState([]);

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await CallAPI({}, '/seller/get-all', 'GET');
        if (response && response.status) {
          const sellerDetails = response.seller.find((x) => x._id === savedProducts.sellerId);
          setSellerDetails(sellerDetails);
        } else {
          console.error('Error fetching seller name');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSellerDetails();
  }, []);

  const NavigateToSeller = async () =>{

    const responce = await CallAPI({}, `/seller/get-ById/${savedProducts.sellerId}`, "GET");
        if (responce && responce.status) {
          Log(responce.seller[0]);
          sessionStorage.setItem('DetailedSeller', JSON.stringify(responce.seller[0]));
          window.location.href = '/allsellers/sellerview';
        } else { console.error('data fetch error /meddicine/getByPhId'); }
  }

  return (
    <div onClick={NavigateToSeller}>

      <Paper sx={{ p: 2, border: '1px solid #ccc', width: '300px' }}>
        <Typography variant="subtitle1">
          Seller Name: {sellerDetails.sellerFirstName+ " "+sellerDetails.sellerLastName}
        </Typography>
      </Paper>
      <Paper sx={{ p: 2, border: '1px solid #ccc', width: '300px' }}>
        <Typography variant="subtitle1">
          Seller Address: {sellerDetails.sellerAdddress}
        </Typography>
      </Paper>
      <Paper sx={{ width: '310px' }}>
        <Map />
      </Paper>
    </div>
  );
};

export default ProductViewSellerDescription;
