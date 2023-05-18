import React,{useEffect, useState} from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import HomeLayout from '../layouts/home/HomeLayout';
// import HomeParallax from '../components/home/HomeParallax'

import { Log } from '../services/Log';
import { CallAPI } from '../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


export default function HomePage() {
  if (!CustomerId) {
    window.location.href = "/login";
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //get all product
    const GetMedicineData = async () => {
      try {
        const responce = await CallAPI( {}, '/products/get-all', "GET");
        if (responce && responce.status) {
          setProducts(responce.data);
        } else { console.error('data fetch error /meddicine/getByPhId'); }
      } catch (error) { console.error('Error:', error); }
    };
    GetMedicineData();
  }, []);
  return (
    <div>
      <CommonLayout>
        <HomeLayout />
      </CommonLayout>
    </div>
  );
}
