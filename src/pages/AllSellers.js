import React, { useEffect, useState } from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import SearchBar from '../components/all seller/SellerSearch';
import SellerCard from '../components/all seller/SellerCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellers } from '../store/actions/sellerAction';

export default function AllSellers() {
  const dispatch = useDispatch();

  const { allSellers } = useSelector((store) => store.sellerReducer);

  useEffect(() => {
    if (allSellers.length === 0) {
      dispatch(getAllSellers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <CommonLayout />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          marginTop: '60px',
          marginLeft: '25px',
        }}
      >
        <h2
          style={{ fontFamily: 'Khula', fontSize: '24px', marginRight: 'auto' }}
        >
          All Sellers
        </h2>
        <SearchBar searchValue={search} onSearchChange={handleSearchChange} />
      </div>
      <SellerCard searchValue={search} />
    </div>
  );
}
