import React from 'react';
import CommonLayout from '../layouts/common/CommonLayout';
import HomeLayout from '../layouts/home/HomeLayout';

export default function HomePage() {
  return (
    <div>
      <CommonLayout>
        <HomeLayout />
      </CommonLayout>
    </div>
  );
}
