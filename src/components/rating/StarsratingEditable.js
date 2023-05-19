import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSIze() {
     const containerStyle = {
       marginTop: '50px', // Adjust this value to move the component down
     };
  return (
    <Stack spacing={1}>
      <Rating
        name="size-large"
        defaultValue={2}
        size="large"
        style={containerStyle}
      />
    </Stack>
  );
}
