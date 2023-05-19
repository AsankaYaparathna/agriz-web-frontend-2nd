import React from 'react';

const SellerViewProfilePicture = () => {

  const DetailedSellerString = sessionStorage.getItem("DetailedSeller");
  const savedSeller = DetailedSellerString ? JSON.parse(DetailedSellerString) : [];

  const imageUrl = savedSeller.sellerImage;
  return (
    <img
      src={imageUrl}
      alt="Seller Profile"
      style={{ width: '300px', height: '300px' }}
    />
  );
};

export default SellerViewProfilePicture;
