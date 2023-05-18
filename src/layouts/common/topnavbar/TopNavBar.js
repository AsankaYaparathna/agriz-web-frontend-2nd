import { Grid, Paper } from '@mui/material';
import React from 'react';
// import Logo from './../../../assets/Images/Logo.png';
import TopNavBarButton from '../../../components/common/TopNavBarButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';


import Cookies from "js-cookie";
const CustomerId = Cookies.get("CustomerId");

export default function TopNavBar() {
  const Logout =() =>{
    Cookies.remove("CustomerId");
    window.location.href = "/login";
  }
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          border: '1px solid #ccc',

          backgroundColor: 'rgba(217, 217, 217, 0.1)',
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid
            item
            paddingLeft={3}
            style={{
              fontSize: '40px',
              color: 'rgba(6, 70, 53, 1)',
              fontFamily: 'Kufam',
            }}
          >
            <b>AGRIZ</b>
          </Grid>

          <Grid item>
            <Grid container spacing={0}>
              <Grid item>
                <NavLink style={{ textDecoration: 'none' }} to={`/home`}>
                  <TopNavBarButton fieldname="Home" />
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink style={{ textDecoration: 'none' }} to={`/allsellers`}>
                  <TopNavBarButton fieldname="Sellers" />
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink style={{ textDecoration: 'none' }} to={`/allproducts`}>
                  <TopNavBarButton fieldname="Products" />
                </NavLink>
              </Grid>

              <Grid item>
                <NavLink style={{ textDecoration: 'none' }} to={`/save`}>
                  <TopNavBarButton fieldname="Saved" />
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink style={{ textDecoration: 'none' }} to={`/contactus`}>
                  <TopNavBarButton fieldname="Contact Us" />
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item pr={3}>
            {/* <NavLink style={{ textDecoration: 'none' }} to={`/login`}>
              
              
            </NavLink> */}
            <button onClick={Logout}> <LogoutIcon />{' '}</button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
