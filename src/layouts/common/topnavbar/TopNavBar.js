import { Grid } from '@mui/material';
import React from 'react';
// import Logo from './../../../assets/Images/Logo.png';
import TopNavBarButton from '../../../components/common/TopNavBarButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

export default function TopNavBar() {
  return (
    <div>
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
          <Grid container spacing={3}>
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
              <NavLink style={{ textDecoration: 'none' }} to={`/contactus`}>
                <TopNavBarButton fieldname="Contact Us" />
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink style={{ textDecoration: 'none' }} to={`/save`}>
                <TopNavBarButton fieldname="Saved" />
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item pr={3}>
          <NavLink style={{ textDecoration: 'none' }} to={`/login`}>
            <LogoutIcon />{' '}
          </NavLink>
        </Grid>
      </Grid>
    </div>
  );
}
