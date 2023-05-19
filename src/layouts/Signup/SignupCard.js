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
import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';

export default function SignupCard() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setcPassword(event.target.value);
  };

  const handleFNameChange = (event) => {
    setfName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setlName(event.target.value);
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if(password !=='' && password === cpassword){

      const body = {
        customerFirstName:fName,
        customerLastName:lName,
        email:username,
        customerPhoneNumber:'',
        customerPassword: password
      };
      try {
        const responce = await CallAPI( body, '/customer/save', "POST");
  
        if (responce.status) {
          Log(responce);
          //Cookies.set("CustomerId", responce.data[0]._id, { expires: 1 });
  
          // Login successful, redirect to home page
          window.location.href = "/login";
          alert("Successfully Created!.");
        } else {
          // Login failed, display error message
          alert("Account Creation failed!.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while logging in");
      }
    }
    else{
      alert('Password not match');
    }
    
  }
    return (
      <form onSubmit={handleSubmit}>
        <Card sx={{ minWidth: 430, opacity: 0.7, borderRadius: '20px' }}>
          <CardContent sx={{ opacity: 1 }}>
            <Typography variant="h6" gutterBottom>
              Sign Up
              <Divider />
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="First Name" onChange={handleFNameChange}/>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Last Name" onChange={handleLNameChange}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" onChange={handleUsernameChange}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password"  type="password" onChange={handlePasswordChange}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Confirm Password" type="password" onChange={handleCPasswordChange}/>
              </Grid>
            </Grid>

            <div style={{ paddingTop: 24 }}>
              <Button
                fullWidth
                type='submit'
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
{/* 
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
            </div> */}

            <div style={{ paddingTop: 12 }}>
              <NavLink style={{ textDecoration: 'none' }} to={`/login`}>
                <Typography>
                  Already have an account? <Link>Sign In Now</Link>
                </Typography>
              </NavLink>
            </div>
          </CardContent>
        </Card>
      </form>
    );
  }
