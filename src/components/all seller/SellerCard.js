import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicRating from './Rating';
import { useSelector } from 'react-redux';

const styles = {
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
  },
  sellerNumber: {
    color: 'rgba(6, 70, 53, 1)',
    fontWeight: 'bold',
  },
};

export default function SellerCard() {
  const { allSellers } = useSelector((store) => store.sellerReducer);

  const clickme = () => {};
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {allSellers.map((val, key) => {
        const isFirstRow = key < 1;

        let cardStyle = {
          maxWidth: '345px',
          marginBottom: '20px',
        };

        if (isFirstRow) {
          cardStyle.flex = '1 1 calc(100% - 40px)';
        } else {
          cardStyle.flex = '1 1 calc(50% - 20px)';
        }

        return (
          <Card key={key} sx={cardStyle}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.sellerImage}
              title={val.name}
              component="a"
              href={val.profilePictureLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickme}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.sellerFirstName + ' ' + val.sellerLastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                reviews
              </Typography>
              <BasicRating />
            </CardContent>
            <CardActions sx={styles.cardActions}>
              <Typography variant="body2" sx={styles.sellerNumber}>
                {val.sellerContactNumber}
              </Typography>
              <Button
                size="small"
                component="a"
                href={val.sellerLocation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
