import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const ProducCountCard = () => {
  return (
    <Grid container spacing={2}>
      <Paper
        sx={{
          p: 2,
          border: '1px solid #ccc',
          width: '537px',
          height: '225px',
          backgroundColor: 'rgba(217, 217, 217, 0.1)',
        }}
      >
        <Grid container direction="row" alignItems="center">
          <Grid item></Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProducCountCard;
