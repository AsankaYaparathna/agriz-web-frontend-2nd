import React from 'react';

const SellerViewProfilePicture = () => {
  const imageUrl =
    'https://geneticliteracyproject.org/wp-content/uploads/elementor/thumbs/Gotabaya-Rajapaksa--pe4w5wh6txgvbe2saeefwxy67hs54kos8427odc4co.jpeg';

  return (
    <img
      src={imageUrl}
      alt="Seller Profile"
      style={{ width: '300px', height: '300px' }}
    />
  );
};

export default SellerViewProfilePicture;
