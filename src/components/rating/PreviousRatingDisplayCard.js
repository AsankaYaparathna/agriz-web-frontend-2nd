import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Typography from '@mui/material/Typography';
import BasicRating from '../all seller/Rating';

const ProducCountCard = () => {
  return (
    <Grid container spacing={2}>
      <Paper
        sx={{
          p: 2,
          border: '2px solid #ccc',
          width: '310px',
          height: '87px',
          backgroundColor: 'rgba(217, 217, 217, 0.28)',
        }}
      >
        <Grid container direction="row" alignItems="center">
          <AccountBoxIcon sx={{ fontSize: 80 }} />
          <Typography
            variant="body1"
            fontWeight="bold"
            align="center"
            sx={{ paddingLeft: '10px' }}
          >
            John Doe
            <br />
            Good Products
          </Typography>
          <BasicRating sx={{ marginLeft: '10px' }} />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProducCountCard;
