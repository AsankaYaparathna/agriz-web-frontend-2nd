import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ActionAreaCard(props) {
  const { product } = props;
  return (
    <Card
      sx={{
        display: 'flex',
        minWidth: 1200,
        height: 140,
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 250, height: 250 }}
        image={product.image}
        alt={product.name}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'left',
          flexGrow: 1,
        }}
      >
        <Typography sx={{ fontSize: 'h5.fontSize', fontWeight: 'bold' }}>
          {product.name}
        </Typography>
        <Typography variant="h6">{product.seller}</Typography>
        <Typography variant="subtitle1">
          Quantity: {product.quantity}
        </Typography>
        <Typography variant="subtitle1">
          1 Kg Price: {product.price}LKR
        </Typography>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          alignItems: 'flex-end',
          marginRight: 0,
          marginLeft: 0,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFBA09',

            color: 'black',
            height: 140,
          }}
        >
          Details
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D9D9D9',

            color: 'black',
            height: 140,
          }}
        >
          Remove
        </Button>
      </div>
    </Card>
  );
}
