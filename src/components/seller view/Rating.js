import React from 'react'; // , { useState }
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const BasicRating = ({ rating }) => {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="read-only" value={rating} readOnly />
    </Box>
  );
};

export default BasicRating;
