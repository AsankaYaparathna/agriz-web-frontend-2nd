import React, { useEffect, useState } from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductLayout from '../layouts/allproducts/ProductLayout';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../store/actions/productsAction';
import SearchBar from '../components/all seller/SellerSearch';

import { Log } from '../services/Log';
import { CallAPI } from '../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function AllProducts() {

  const [products, setProducts] = useState([]);
  const [productsBk, setProductsBk] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    //get all product
    const GetProductData = async () => {
      try {
        const responce = await CallAPI({}, '/products/get-all', "GET");
        if (responce && responce.status) {
          setProducts(responce.data);
          setProductsBk(responce.data);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetProductData();
  }, []);

  useEffect(() => {
    //get all category
    const GetApiData = async () => {
      try {
        const responce = await CallAPI({}, '/catergory/get-all', "GET");
        if (responce && responce.status) {
          setCategory(responce.data);
        } else { console.error('data fetch error /catergory/get-all'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetApiData();
  }, []);


  const dispatch = useDispatch();
  const { getAllProductsListLoading, allProducts } = useSelector(
    (store) => store.productsReducer
  );

  useEffect(() => {
    if (getAllProductsListLoading === 'notStarted') {
      dispatch(getAllProducts());
    }
  }, [dispatch, getAllProductsListLoading]);

  const filerProduct = (async (type) => {
    try {
      if (type === 'all') {
        setProducts(productsBk);
      }
      else {
        const catId = await GetCatId(type);;
        const filteredProducts = productsBk.filter((product) => product.productCatogoryId === catId);
        setProducts(filteredProducts);
      }

    } catch (error) { console.error('Error:', error); }
  });

  const GetCatId = (async (type) => {
    var catId = 0;
    category.map((x) => {
      if (x.productCatrgoryName === type) {
        catId = x._id;
      }
    });

    return catId;
  });

  const handleSearchChange = (event) => {
    const value = event.target?.value || '';
    setSearch(value);

    if (value !== '') {
      const filteredProducts = productsBk.filter((product) =>
        product.productName.toLowerCase() === value.toLowerCase()
      );
      setProducts(filteredProducts);
    }
    else{
      setProducts(productsBk);
    }
    
  };
  return (
    <div>
      <CommonLayout>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}>
        <SearchBar searchValue={search} onSearchChange={handleSearchChange} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
          }}
        >
          <NavLink style={{ textDecoration: 'none' }} onClick={() => filerProduct('all')}>
            <div>All</div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} onClick={() => filerProduct('vegitable')}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>
              Vegetable
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} onClick={() => filerProduct('fruits')}>
            <div style={{ marginLeft: '10px', marginRight: '10px' }}>Fruit</div>
          </NavLink>
          <NavLink style={{ textDecoration: 'none' }} onClick={() => filerProduct('other')}>
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
          {products.map((product) => (
            <Grid item xs={2}>
              <ProductLayout product={{
                productImage: product.productImage,
                productName: product.productName,
                availableQuantity: product.availableQuantity,
                price: product.price,
                id: product._id,
                sellerId: product.sellerId,
                description:product.description
              }} />
            </Grid>
          ))}
        </Grid>
      </CommonLayout>
    </div>
  );
}
