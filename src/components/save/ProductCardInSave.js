import  React ,{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function ActionAreaCard(props) {
  const { product } = props;
  const [sellerName, setSellerName] = useState('');

  useEffect(() => {
    const fetchSellerName = async () => {
      try {
        const response = await CallAPI({}, '/seller/get-all', 'GET');
        if (response && response.status) {
          const sellerName = response.seller.find((x) => x._id === product.sellerId);
          setSellerName(sellerName.sellerFirstName+" "+ sellerName.sellerLastName);
        } else {
          console.error('Error fetching seller name');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchSellerName();
  }, []);

  const SeeProductDetails =()=>{
    sessionStorage.setItem('DetailedProduct', JSON.stringify(product));
    window.location.href = '/productview';
  };
  
  const RemoveProductDetails =async ()=>{
    Log(product._id);
    const responce = await CallAPI({}, `/savedProduct/getByUserId/${CustomerId}`, "GET");
    if (responce && responce.status) {
      Log(responce);
      const localProduct = responce.data[0].products;

      const isProductExists = responce.data[0].products.some((savedProduct) => savedProduct === product._id);
      if (!isProductExists) {
        console.log('Product already exists:', responce.data[0].products);
        return;
      }
      localProduct.pop(product._id);
      const body = {
        "customerId": CustomerId,
        products: localProduct
      }
      const responce2 = await CallAPI(body, `/savedProduct/update/${responce.data[0]._id}`, "POST");
      if (responce2 && responce2.status) {
          window.location.reload();
      }

    }
  
  };

  return (
    <Card
      sx={{
        display: 'flex',
        minWidth: 1200,
        height: 140,
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, height: 250 }}
        image={product.productImage}
        alt={product.productName}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
          flexGrow: 1,
        }}
      >
        <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold' }}>
          {product.productName}
        </Typography>
        <Typography variant="h6">{ sellerName}</Typography>
        <Typography variant="subtitle1">
          Quantity: {product.availableQuantity}
        </Typography>
        <Typography variant="subtitle1">
          1 Kg Price: {product.price}LKR
        </Typography>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'flex-end',
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <Button
          variant="contained"
          onClick={SeeProductDetails}
          sx={{ backgroundColor: '#FFBA09', color: 'black', height: 140, }} >
          Details
        </Button>
        <Button
          variant="contained"
          onClick={RemoveProductDetails}
          sx={{ backgroundColor: '#D9D9D9', color: 'black', height: 140, }} >
          Remove
        </Button>
      </div>
    </Card>
  );
}
