import React from 'react';
import HomeParallax from './../../components/home/HomeParallax'
import HomeImg2 from '../../components/home/HomeImg2'
// import { NavLink } from 'react-router-dom';


export default function HomeLayout() {
  return (
    <div>
      <HomeParallax />
      <HomeImg2 />
      <div></div>

      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <NavLink style={{ textDecoration: 'none' }} to={`/allproducts`}>
          <div>All </div>
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={`/vegetable`}>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            Vegetable
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={`/fruit`}>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>Fruit</div>
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} to={`/other`}>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            Other Products
          </div>
        </NavLink>
      </div> */}
    </div>
  );
}
