import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignupCard() {
  return (
    <Card sx={{ minWidth: 430, opacity: 0.7, borderRadius: '20px' }}>
      <CardContent sx={{ opacity: 1 }}>
        <Typography variant="h6" gutterBottom>
          Sign Up
          <Divider />
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Last Name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Password" type="password" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Confirm Password" type="password" />
          </Grid>
        </Grid>

        <div style={{ paddingTop: 24 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#064635',
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Sign Up
          </Button>
        </div>
        <div style={{ paddingTop: 12 }}>
          <Divider />
        </div>

        <div style={{ paddingTop: 12 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#000000',
              color: '#fff',
              textTransform: 'none',
            }}
          >
            Sign Up with Google
          </Button>
        </div>

        <div style={{ paddingTop: 12 }}>
          <NavLink style={{ textDecoration: 'none' }} to={`/login`}>
            <Typography>
              Already have an account? <Link>Sign In Now</Link>
            </Typography>
          </NavLink>
        </div>
      </CardContent>
    </Card>
  );
}
