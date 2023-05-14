import React from 'react';
import TopNavBar from './topnavbar/TopNavBar';

export default function CommonLayout({ children }) {
  return (
    <div>
      <TopNavBar />
      {children}
    </div>
  );
}
