import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backgroundImage from './../../assets/Images/agrizz/backgroud-01.png';
import mountainsImage from './../../assets/Images/agrizz/mountains-01.png';
import sunImage from './../../assets/Images/agrizz/sun-01.png';
import cowsImage from './../../assets/Images/agrizz/cows-01.png';
import plantsImage from './../../assets/Images/agrizz/plants-01.png';
import cloudsImage from './../../assets/Images/agrizz/clouds-01.png';
import clouds2Image from './../../assets/Images/agrizz/clouds 2-01.png';
// import manOnMountainImage from './images/agrizz/';
// import jungle5Image from '../assets/images/agrizz/jungle5-01.png';

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
        {/* <ParallaxLayer offset={0} speed={0.40}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${manOnMountainImage})`
            }}
          ></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0} speed={0.35}>
          <div
            style={{
              height: '1000px',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 1038px',
              backgroundRepeat: 'repeat-x',
              width: '100%',
              position: 'absolute',
              backgroundImage: `url(${jungle5Image})`
            }}
          ></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={1} speed={0.25}>
          {/* TextBlock component */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
