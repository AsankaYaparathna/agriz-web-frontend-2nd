import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SaveProductButton from './../../components/products/SaveProductButton';

export default function ActionAreaCard({ info, handleOnClick }) {
  return (
    <Card sx={{ maxWidth: 200 }} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/04/23175719/shutterstock_440493100-1.jpg"
          alt="Carrot"
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ textAlign: 'center' }}
          >
            Carrot
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            Stock: 100KG
          </Typography>
          <SaveProductButton />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
