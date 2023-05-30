import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicRating from './Rating';
import { useSelector } from 'react-redux';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


const styles = {
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  },
  sellerNumber: {
    color: 'rgba(6, 70, 53, 1)',
    fontWeight: 'bold',
  },
};

export default function SellerCard(search) {
  const [sellers, setSellers] = useState([]);
  const [sellersBk, setSellersBk] = useState([]);
  const [ratingValue, setRatingValue] = useState([]);

  useEffect(() => {
    //get all product
    const GetMedicineData = async () => {
      try {
        const responce = await CallAPI({}, '/seller/get-all', "GET");
        if (responce && responce.status) {
          setSellers(responce.seller);
          setSellersBk(responce.seller);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetMedicineData();
  }, []);
 
  useEffect(() => {
    if (search.searchValue !== '') {
      const filteredSellers = sellersBk.filter(
        (x) =>
          x.sellerFirstName.toLowerCase() === search.searchValue.toLowerCase() ||
          x.sellerLastName.toLowerCase() === search.searchValue.toLowerCase()
      );
      setSellers(filteredSellers);
    } else {
      setSellers(sellersBk);
    }
  }, [search]);

  useEffect(() => {
    const GetRatingData = async () => {
      try {
       const responce = await CallAPI({}, `/rate/get-all`, "GET");
        if (responce && responce.status) {
          setRatingValue(responce.data);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetRatingData();
  }, []);

  const handleImageClick = (val) =>{
    sessionStorage.setItem('DetailedSeller', JSON.stringify(val));
    window.location.href = '/allsellers/sellerview';
  }

  const clickme = () => {};
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {sellers.map((val, key) => {
        const isFirstRow = key < 1;
        var localRate = 0;
        const sellerRate = ratingValue.map((x)=>{
          if(x.sellerId ===val._id){
            localRate = x.rateCount;
          }
        })
        
        let cardStyle = {
          maxWidth: '345px',
          marginBottom: '20px',
        };

        if (isFirstRow) {
          cardStyle.flex = '1 1 calc(100% - 40px)';
        } else {
          cardStyle.flex = '1 1 calc(50% - 20px)';
        }

        return (
          <Card key={key} sx={cardStyle}>
            <div onClick={() => handleImageClick(val)}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.sellerImage}
              title={val.name}
              component="a"
              href={val.profilePictureLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickme}
            />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.sellerFirstName + ' ' + val.sellerLastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                reviews
              </Typography>
              <BasicRating rating={localRate}/>
            </CardContent>
            <CardActions sx={styles.cardActions}>
              <Typography variant="body2" sx={styles.sellerNumber}>
                {val.sellerContactNumber}
              </Typography>
              <Button
                size="small"
                component="a"
                href={val.sellerLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
