import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import TopNavigationBar from '../layouts/common/CommonLayout';
import ContactUsImage from '../assets/Images/ContactUsBackground.png';
import ContactUsForm from '../components/contact us/ContactUsForm';

const ContactUsPage = () => {
  return (
    <>
      <TopNavigationBar />
      <Container maxWidth="">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="calc(112vh - 55px)"
        >
          <Grid container justifyContent="" spacing={4}>
            <Grid item xs={12} sm={6}>
              <div style={{ marginTop: '2px', marginLeft: '85px' }}>
                <img src={ContactUsImage} alt="Contact Us" />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div
                style={{
                  marginTop: '200px',
                  marginLeft: '-600px',
                  marginRight: '500px',
                }}
              >
                <ContactUsForm />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactUsPage;
