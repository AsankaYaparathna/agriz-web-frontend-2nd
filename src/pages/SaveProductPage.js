import React, { useEffect, useState } from 'react';
import TopNavbar from '../layouts/common/CommonLayout';
import SaveProductCard from '../components/save/ProductCardInSave';

import { Log } from '../services/Log';
import { CallAPI } from '../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

function SaveProductPage() {
  const savedProductString = sessionStorage.getItem("SavedProduct");
  //const savedProducts = savedProductString ? JSON.parse(savedProductString) : [];
  const [products, setProducts] = useState([]);
  const [savedProducts, setsavedProducts] = useState([]);

  useEffect(() => {
    const GetSavedProduct = async () => {
      try {
        const responce = await CallAPI({}, `/savedProduct/getByUserId/${CustomerId}`, "GET");
        if (responce && responce.status) {
          setsavedProducts([]);
          responce.data[0].products.map(async (x)=>{
            const responce2 = await CallAPI({}, `/products/getById/${x}`, "GET");
            if (responce2 && responce2.status) {
              setsavedProducts((prevProducts) => [...prevProducts, responce2.product[0]]);
            } else { }
          });
        } else { }
      } catch (error) { console.error('Error:', error); }
    };
    GetSavedProduct();
  }, []);

  return (
    <div>
      <TopNavbar />
      <div style={{ marginLeft: '20px', textAlign: 'left' }}>
        <h4 style={{ fontSize: '24px', fontWeight: 'bold' }}>Saved Products</h4>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1800px',
          margin: 'auto',
          marginBottom:'30px'
        }}
      >
        {savedProducts.map((product, index) => (
          <div
            key={index}
            style={{
              marginTop: '20px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <SaveProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaveProductPage;
