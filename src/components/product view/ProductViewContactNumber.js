import React,{useEffect,useState} from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    height: '54px',
    width: '350px',
    padding: theme.spacing(2),
    marginLeft : '39%',
    marginTop: '10px',
    marginBottom : '10px'
  },
  text: {
    color: 'rgba(6, 70, 53, 1)',
  },
}));

const MyComponent = () => {
  const classes = useStyles();
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
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" className={classes.text}>
       {sellerDetails.sellerContactNumber}
      </Typography>
    </Grid>
  );
};

export default MyComponent;
