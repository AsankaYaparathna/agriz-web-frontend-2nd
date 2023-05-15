import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backgroundImage from './../../assets/Images/agrizz/backgroud-01.png';
import mountainsImage from './../../assets/Images/agrizz/mountains-01.png';
import sunImage from './../../assets/Images/agrizz/sun-01.png';
import cowsImage from './../../assets/Images/agrizz/cows-01.png';
import plantsImage from './../../assets/Images/agrizz/plants-01.png';
import cloudsImage from './../../assets/Images/agrizz/clouds-01.png';
import clouds2Image from './../../assets/Images/agrizz/clouds 2-01.png';
import HomeImg2 from './HomeImg2'
import ProductLayout from '../../layouts/allproducts/ProductLayout';
// import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';




function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '5', left: '0' }}>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${mountainsImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${sunImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${cowsImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${plantsImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${cloudsImage})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${clouds2Image})`,
            }}
          ></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <HomeImg2 />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <h1 style={{ padding: '200px' }}>Buy Organic Products</h1>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1} speed={0.25}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '300px',
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
              <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                Fruit
              </div>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to={`/other`}>
              <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                Other Products
              </div>
            </NavLink>
          </div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={1} speed={0.25} style={{ paddingTop: '350px' }}>
          <Grid
            container
            justifyContent="center"
            spacing={4}
            pl={4}
            pr={4}
            pt={0}
          >
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
            <Grid item xs={2}>
              <ProductLayout />
            </Grid>
          </Grid>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
