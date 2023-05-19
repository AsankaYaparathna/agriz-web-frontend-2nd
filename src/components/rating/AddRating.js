import React from 'react';
import Stars from './StarsratingEditable';
import AddRatingImg from '../../assets/Images/AddRating.png';
import { TextField, Button } from '@mui/material';

export default function AddRating() {
  const containerStyle = {
    backgroundImage: `url(${AddRatingImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    maxWidth: '480px',
    maxHeight: '300px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px', // Adjust this value to move the component down
  };

  return (
    <div>
      <div style={containerStyle}>
        <Stars />
      </div>
      <TextField
        fullWidth
        label="Write Your Reviews"
        variant="outlined"
        margin="normal"
        multiline
        rows={2}
        name="message"
        style={{ maxWidth: '400px' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#064635', marginTop: 2 }}
      >
        Submit
      </Button>
    </div>
  );
}
