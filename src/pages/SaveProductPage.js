import React from 'react';
import TopNavbar from '../layouts/common/CommonLayout';
import SaveProductCard from '../components/save/ProductCardInSave';

function SaveProductPage() {
  const sampleProducts = [
    {
      name: 'Red Chilly',
      image:
        'https://live-production.wcms.abc-cdn.net.au/6a8697b1e115f3af0735fe8ce272b6ae?impolicy=wcms_crop_resize&cropH=2016&cropW=3024&xPos=0&yPos=1008&width=862&height=575',
      seller: 'Bandarawela Shop',
      quantity: '100Kg',
      price: '250',
    },
    {
      name: 'Green Peppers',
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
      seller: 'Green Valley Mart',
      quantity: '150Kg',
      price: '200',
    },
    {
      name: 'Tomatoes',
      image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6',
      seller: 'Fresh Farm Market',
      quantity: '300Kg',
      price: '100',
    },
    {
      name: 'Potatoes',
      image: 'https://images.unsplash.com/photo-1585938498755-5b5f5a5d8c2d',
      seller: 'Golden Harvest',
      quantity: '500Kg',
      price: '80',
    },
    {
      name: 'Carrots',
      image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006',
      seller: 'Carrot World',
      quantity: '200Kg',
      price: '120',
    },
    {
      name: 'Broccoli',
      image: 'https://images.unsplash.com/photo-1599028341417-9f9f35f15b78',
      seller: 'Green Grocers',
      quantity: '100Kg',
      price: '150',
    },
    {
      name: 'Cabbage',
      image: 'https://images.unsplash.com/photo-1582212667483-05d7b9f3b46f',
      seller: 'Healthy Market',
      quantity: '250Kg',
      price: '75',
    },
    {
      name: 'Cucumbers',
      image: 'https://images.unsplash.com/photo-1592939752957-6b84e74d9d9f',
      seller: 'Cucumber Corner',
      quantity: '150Kg',
      price: '50',
    },
    {
      name: 'Onions',
      image: 'https://images.unsplash.com/photo-1597165516805-43e7a291f3b3',
      seller: 'Onion Station',
      quantity: '400Kg',
      price: '90',
    },
    {
      name: 'Garlic',
      image: 'https://images.unsplash.com/photo-1547547457-0cf3a3f7f81c',
      seller: 'Garlic World',
      quantity: '100Kg',
      price: '200',
    },
    {
      name: 'Zucchini',
      image: 'https://images.unsplash.com/photo-1557814103-3d3c921549e1',
      seller: 'Zucchini Zone',
      quantity: '75Kg',
      price: '130',
    },
  ];

  return (
    <div>
      <TopNavbar />
      <div style={{ marginLeft: '20px', textAlign: 'left' }}>
        <h4 style={{ fontSize: '24px', fontWeight: 'bold' }}>Saved Products</h4>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '1800px',
          margin: 'auto',
        }}
      >
        {sampleProducts.map((product, index) => (
          <div
            key={index}
            style={{
              marginTop: '20px',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          >
            <SaveProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaveProductPage;
