import React, { useEffect, useState } from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductViewImage from '../components/product view/ProductViewImage';
import ProductDescription from '../components/product view/ProductViewDescription';
import ProductViewSellerDescription from '../components/product view/ProductViewSellerDescriptions';
import ProductViewSaveButton from '../components/product view/ProductViewSaveButton';
import ProductViewContact from './../components/product view/ProductViewContactNumber';
import ProductDetails from '../components/product view/ProductViewProductDetails';
import { Grid, Divider } from '@mui/material';
import ProductLayout from '../layouts/allproducts/ProductLayout';

import { Log } from '../services/Log';
import { CallAPI } from '../services/API_CALL';
import { CallMlAPI } from '../services/ML_API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function ProductViewPage() {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const DetailedProductString = sessionStorage.getItem("DetailedProduct");
  const savedProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];

    if(!savedProducts){
      window.location.href = '/productview';
    }

    
  useEffect(() => {
    //get all product
    const GetProductData = async () => {
      try {
        const responce = await CallAPI({}, '/products/get-all', "GET");
        if (responce && responce.status) {
          setProducts(responce.data);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetProductData();
  }, []);

  useEffect(() => {
    //get all product
    const GetPrdictedData = async () => {
      try {
        const responce = await CallMlAPI({}, `/recommendation/${savedProducts.id}`, "GET");
        Log(responce);
        if (responce) {
          // const filteredProducts = products.filter((product) => product._id === '');
          // Log(responce.recommendations);
          
          setRecommendedProducts(responce.recommendations);
        } else { console.error('data fetch error /recommendation Ml data'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetPrdictedData();
  }, []);


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
        <Grid container spacing={3} style={{alignItems:'center',justifyContent:'center',marginBottom:'50px'}}>

        {recommendedProducts.map((productId)=>{
          const product = products.slice(0, 5).find((p) => p._id === productId);
          if (product) {
            return(
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
            );

          }
        })}
        </Grid>



      </CommonLayout>
    </div>
  );
}
