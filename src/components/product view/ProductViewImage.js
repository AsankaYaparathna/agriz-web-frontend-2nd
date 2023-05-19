import React from 'react';

const ProductViewImage = () => {

  const DetailedProductString = sessionStorage.getItem("DetailedProduct");
  const savedProducts = DetailedProductString ? JSON.parse(DetailedProductString) : [];

  const imageStyle = {
    width: '313.5px',
    height: '243.17px',
    border: '1px solid #ccc',
  };

  return (
    <img
      src={savedProducts.productImage}
      alt="Product view"
      style={imageStyle}
    />
  );
};

export default ProductViewImage;
