import React from 'react';
import { TextField, Button } from '@mui/material';

const ContactUsForm = () => {
  return (
    <>
      <TextField fullWidth label="Email" variant="outlined" margin="normal" />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#064635', marginTop: 2 }}
      >
        Send
      </Button>
    </>
  );
};

export default ContactUsForm;
