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
  const [fruits, setFruits] = useState([]);
  const [others, setOthers] = useState([]);
  const [vegitables, setVegitables] = useState([]);
  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];

  
  useEffect(() => {
     //get all category
    //  const GetApiData = async () => {
    //   try {
    //     const responce = await CallAPI({}, '/catergory/get-all', "GET");
    //     if (responce && responce.status) {
    //       setCategory(responce.data);
    //     } else { console.error('data fetch error /catergory/get-all'); }
    //   } catch (error) { console.error('Error:', error); }
    // };
    // GetApiData();

    //get all product
    const GetProductData = async () => {
      try {
        const responce = await CallAPI({}, `/products/user-produts/${savedSeller._id}`, "GET");
        if (responce && responce.status) {
          setProducts(responce.data);
          //setProductsBk(responce.data);

          const catIdf = await GetCatId('fruits');
          const filteredProductsf = products.filter( (product) => product.productCatogoryId === catIdf);
          setFruits(filteredProductsf);

          const catIdv = await GetCatId('vegitable');
          const filteredProductsv = responce.data.filter( (product) => product.productCatogoryId === catIdv);
          setVegitables(filteredProductsv);


          const catIdo = await GetCatId('others');
          const filteredProductso =products.filter( (product) => product.productCatogoryId === catIdo);
          setOthers(filteredProductso);


        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetProductData();
  }, []);


  const GetCatId = (async (type) => {
    var catId = 0;
    const responce = await CallAPI({}, '/catergory/get-all', "GET");
    if (responce && responce.status) {
      responce.data.map((x) => {
        if (x.productCatrgoryName === type) {
          catId = x._id;
        }
      });
    } else { console.error('data fetch error /catergory/get-all'); }
    return catId;
  });

  // useEffect(() => {
  //   const fruitProduct = async () => {
  //     try {
  //         const catId = await GetCatId('fruits');
  //         const filteredProducts = products.filter( (product) => product.productCatogoryId === catId);
  //         setFruits(filteredProducts);
  //         Log(filteredProducts);
  //     } catch (error) { console.error('Error:', error); }
  //   };
  //   fruitProduct();
  // }, []);

  // useEffect(() => {
  //   const VegitableProduct = async () => {
  //     try {
  //         const catId = await GetCatId('vegitable');
  //         const filteredProducts = products.filter( (product) => product.productCatogoryId === catId);
  //         setVegitables(filteredProducts);
  //         Log(filteredProducts);
  //     } catch (error) { console.error('Error:', error); }
  //   };
  //   VegitableProduct();

  // }, []);

  // useEffect(() => {
  //   const OtherProduct = async () => {
  //     try {
  //         const catId = await GetCatId('others');
  //         const filteredProducts = products.filter( (product) => product.productCatogoryId === catId);
  //         Log(filteredProducts);
  //         setOthers(filteredProducts);
  //     } catch (error) { console.error('Error:', error); }
  //   };
  //   OtherProduct();
  // }, []);


  return (
    <Grid item xs={12}>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h2>Total Product</h2>
            <span style={{ fontSize: '50px' }}>{products.length}</span>
          </Grid>
          <Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{fruits.length}</h2>
              <h5>Fruits</h5>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{vegitables.length}</h2>
              <h5>Vegitable</h5>
            </Grid>
          </Grid><Grid item xs={3}>
            <Grid style={{ backgroundColor: 'rgba(242, 242, 242,1)', padding: '5px 5px', marginTop: '30%' }}>
              <h2>{others.length}</h2>
              <h5>Others</h5>
            </Grid>
          </Grid>
          
        </Grid>
      </Item>
    </Grid>
  );
};

export default ProducCountCard;
