import {
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import LoginTextFiledWithImage from '../../components/Login/LoginTextFiledWithImage';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SwitchWithTypography from './SwitchWithTypography';
import { NavLink } from 'react-router-dom';

export default function LoginCard() {
  return (
    <div>
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
                }}
              />
            </div>
            <div style={{ paddingTop: 15 }}>
              <LoginTextFiledWithImage
                info={{ placehoder: 'Password', icon: <KeySharpIcon /> }}
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
              <NavLink style={{ textDecoration: 'none' }} to={`/home`}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#064635', textTransform: 'none' }}
                >
                  Login
                </Button>
              </NavLink>
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
    </div>
  );
}
