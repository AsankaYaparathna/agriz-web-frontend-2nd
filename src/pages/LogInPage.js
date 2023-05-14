import React from 'react';
import BackImage from '../assets/Images/LoginBackground.png';
import LoginCard from '../layouts/Login/LoginCard';

export default function LoginPage() {
  return (
    <div
      style={{
        display: 'flex', // Enable flexbox layout
        alignItems: 'flex-start', // Align the child element to the start of the container
        backgroundImage: `url(${BackImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to cover the entire viewport
        width: '100%', // Set the width to cover the entire viewport
      }}
    >
      <div style={{ paddingTop: 60, paddingLeft: 130 }}>
        <LoginCard />
      </div>
    </div>
  );
}
