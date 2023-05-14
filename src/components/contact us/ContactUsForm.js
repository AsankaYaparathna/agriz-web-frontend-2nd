import React from 'react';
import { TextField, Button } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactUsForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_mrw3164',
        'template_yxg7ncp',
        event.target,
        'rBDyGuZfVuwyzuA1h'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear form fields after submission (optional)
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        name="email"
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        name="message"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ backgroundColor: '#064635', marginTop: 2 }}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactUsForm;
