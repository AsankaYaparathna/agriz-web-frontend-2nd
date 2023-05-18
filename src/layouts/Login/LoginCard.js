import {
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import React,{useEffect, useState} from 'react';
import LoginTextFiledWithImage from '../../components/Login/LoginTextFiledWithImage';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SwitchWithTypography from './SwitchWithTypography';
import { NavLink } from 'react-router-dom';


import { Log } from '../../services/Log';
import { CallAPI } from '../../services/API_CALL';
import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");


export default function LoginCard() {

  if (CustomerId) {
    window.location.href = "/home";
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();

    const body= {
      email : username,
      customerPassword : password
    };

    try {
      const responce = await CallAPI( body, '/customer/login', "POST");

      if (responce.status) {

        Cookies.set("CustomerId", responce.data[0]._id, { expires: 1 });

        // Login successful, redirect to home page
        window.location.href = "/home";
        alert("Successfully logged in");
      } else {
        // Login failed, display error message
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Card sx={{ minWidth: 430, opacity: 0.7, borderRadius: '20px' }}>
        <CardContent sx={{ opacity: 1 }}>
          <Typography>Login</Typography>

          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              marginTop: 15,
            }}
          >
            <div style={{ paddingTop: 12, paddingBottom: 12 }}>
              <Divider />
            </div>
            <div>
              <LoginTextFiledWithImage
                info={{
                  placehoder: 'User Name/ Email',
                  icon: <PermIdentitySharpIcon />,
                  changeFunction : handleUsernameChange
                }}
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <LoginTextFiledWithImage
                info={{ 
                  placehoder: 'Password', 
                  icon: <KeySharpIcon />,
                  changeFunction : handlePasswordChange }}
              />
            </div>
            <Grid2
              container
              alignItems="center"
              justifyContent="space-between"
              pt={2}
            >
              <Grid2 item>
                <SwitchWithTypography />
              </Grid2>
              <Grid2 item>
                <Typography>Forgot password</Typography>
              </Grid2>
            </Grid2>
            <div style={{ paddingTop: 12 }}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: '#064635', textTransform: 'none' }}
                >
                  Login
                </Button>
            </div>
            <div style={{ paddingTop: 12 }}>
              <Divider />
            </div>
            <div style={{ paddingTop: 12 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: '#000000', textTransform: 'none' }}
              >
                Sign In With Google
              </Button>
            </div>
            <div style={{ paddingTop: 12 }}>
              <NavLink style={{ textDecoration: 'none' }} to={`/register`}>
                <Typography>
                  Don't have an account? <Link>Signup now</Link>
                </Typography>
              </NavLink>
            </div>
          </div>
        </CardContent>
      </Card>
      </form>
      
      
    </div>
  );
}
