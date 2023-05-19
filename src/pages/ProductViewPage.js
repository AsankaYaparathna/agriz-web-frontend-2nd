import React, { useEffect, useState } from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductViewImage from '../components/product view/ProductViewImage';
import ProductDescription from '../components/product view/ProductViewDescription';
import ProductViewSellerDescription from '../components/product view/ProductViewSellerDescriptions';
import ProductViewSaveButton from '../components/product view/ProductViewSaveButton';
import ProductViewContact from './../components/product view/ProductViewContactNumber';
import ProductDetails from '../components/product view/ProductViewProductDetails';
import { Grid, Divider } from '@mui/material';


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
        const responce = await CallMlAPI({}, `/recommendation/${CustomerId}`, "GET");
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

        {recommendedProducts.map((productId)=>{
          const product = products.find((p) => p._id === productId);
          if (product) {
            return(<Grid item key={productId}>
              {/* <h3>{product.productName}</h3>
              <img src={product.productImage} alt={product.productName} />
              <p>{product.description}</p>
              <p>Price: {product.price}</p> */}
              a
            </Grid>);

          }
        })}

      </CommonLayout>
    </div>
  );
}
