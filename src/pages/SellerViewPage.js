import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import SellerViewCard from '../components/seller view/SellerViewCard';
import SellerViewSearch from '../components/seller view/SellerViewSearch';
import ProducCountCard from '../components/seller view/ProductCountCard';

export default function SellerViewPage() {
  return (
    <div>
      <CommonLayout>
        <br></br>
        <SellerViewSearch />
        <SellerViewCard />
        <ProducCountCard />
      </CommonLayout>
    </div>
  );
}
