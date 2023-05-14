import React from 'react';
import regiImage from '../assets/Images/SignupBackground.png';
import SignupCard from '../layouts/Signup/SignupCard';
export default function SignUpPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${regiImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh', // Set the height to cover the entire viewport
        width: '100%', // Set the width to cover the entire viewport
      }}
    >
      <div style={{ paddingTop: 90, paddingLeft: 1000, paddingRight: 40 }}>
        <SignupCard />
      </div>
    </div>
  );
}
