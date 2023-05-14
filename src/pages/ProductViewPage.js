import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import ProductViewImage from '../components/product view/ProductViewImage';
import ProductDescription from '../components/product view/ProductViewDescription';
import ProductViewSellerDescription from '../components/product view/ProductViewSellerDescriptions';
import ProductViewSaveButton from '../components/product view/ProductViewSaveButton';
import ProductViewContact from './../components/product view/ProductViewContactNumber'


export default function ProductViewPage() {
  return (
    <div>
      <CommonLayout>
        <ProductViewImage/>
        <ProductDescription/>
        <ProductViewSellerDescription/>
        <ProductViewSaveButton/>
        <ProductViewContact/>
      </CommonLayout>
    </div>
  );
}
