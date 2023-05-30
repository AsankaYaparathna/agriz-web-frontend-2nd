import React, { useState, useEffect } from 'react'; // , { useState }
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


const BasicRating = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];
  useEffect(() => {
    const GetRatingData = async () => {
      try {
        const responce = await CallAPI({}, `/rate/get-by-sellerId/${savedSeller._id}`, "GET");
        if (responce && responce.status) {
          setRatingValue(responce.data[0].rateCount);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetRatingData();
  }, []);

  const handleRatingChange = async (newValue, name) => {
    try {
      const responce = await CallAPI({}, `/rate/get-by-sellerId/${savedSeller._id}`, "GET");
      if (responce && responce.status) {

        if (responce.data.length > 0) {
          const totNewRate = name;
          var rateTotalCount = responce.data[0].rateTotalCount;
          var rateCount = responce.data[0].rateCount;
          var numOfRateUsers = responce.data[0].rateTotalUsers.length;
          var numOfRateUsersArray = responce.data[0].rateTotalUsers;
          const isUserExixts = responce.data[0].rateTotalUsers.some((x) => x.custId === CustomerId);

          if (isUserExixts) {
            responce.data[0].rateTotalUsers.map((x, index) => {
              if (x.custId === CustomerId) {
                rateTotalCount = rateTotalCount - x.rate + totNewRate;
                rateCount = rateTotalCount / numOfRateUsers;
                Log(x);
                numOfRateUsersArray[index] = {
                  custId: CustomerId,
                  rate: totNewRate,
                  _id: numOfRateUsersArray[index]._id
                }
              }
            })

          }
          else {
            numOfRateUsers += 1;
            rateTotalCount = rateTotalCount + totNewRate;
            rateCount = rateTotalCount / numOfRateUsers;
            numOfRateUsersArray.push({
              custId: CustomerId,
              rate: totNewRate
            });
          }


          const body = {
            rateCount: rateCount,
            rateTotalCount: rateTotalCount,
            rateTotalUsers: numOfRateUsersArray,
            sellerId: savedSeller._id
          }
          Log(body);
          const responceUp = await CallAPI(body, `/rate/update/${responce.data[0]._id}`, "POST");
          if (responceUp && responceUp.status) {
            window.location.reload();
          }
        }
        else {
          const body = {
            rateCount: name,
            rateTotalCount: name,
            rateTotalUsers: {
              custId: CustomerId,
              rate: name
            },
            sellerId: savedSeller._id
          }
          Log(body);
          const responceUp = await CallAPI(body, `/rate/save`, "POST");
          if (responceUp && responceUp.status) {
            window.location.reload();
          }
        }


      } else { console.error('data fetch error', `/rate/get-by-sellerId/${savedSeller._id}`); }
    } catch (error) { console.error('Error:', error); }
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={ratingValue} onChange={handleRatingChange} />
    </Box>
  );
};

export default BasicRating;
