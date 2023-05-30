import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function ContainedButtons(product) {
  const SaveProduct = async () => {
    const responce = await CallAPI({}, `/savedProduct/getByUserId/${CustomerId}`, "GET");
    if (responce && responce.status) {
      const localProduct = responce.data[0].products;
      const isProductExists = responce.data[0].products.some((savedProduct) => savedProduct === product.product.id);
      if (isProductExists) {
        console.log('Product already exists:', responce.data[0].products);
        return;
      }
      localProduct.push(product.product.id);
      const body = {
        "customerId": CustomerId,
        products: localProduct
      }
      const responce2 = await CallAPI(body, `/savedProduct/update/${responce.data[0]._id}`, "POST");
      if (responce2 && responce2.status) {
      }

    } else { }
  };


  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={SaveProduct}
        variant="contained"
        startIcon={<FavoriteIcon />}
        style={{
          backgroundColor: 'rgba(81, 146, 89, 0.34)',
          color: 'rgba(92, 90, 90, 1)',
        }}
      >
        Save
      </Button>
    </Stack>
  );
}
