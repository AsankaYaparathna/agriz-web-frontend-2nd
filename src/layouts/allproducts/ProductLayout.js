import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import SaveProductButton from '../../components/allproducts/SaveProductButton';

export default function ProductLayout() {
  return (
    <div>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=2owPswip"
          title="green iguana"
        />
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography>Name</Typography>
          <Typography>Stock Count</Typography>
          <Typography>Price</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <SaveProductButton />
        </CardActions>
      </Card>
    </div>
  );
}
