import { Button } from '@mui/material';
import React from 'react';

export default function TopNavBarButton({ fieldname }) {
  return (
    <div>
      <Button
        style={{
          backgroundColor: 'white',
          color: 'rgba(70, 72, 72, 1)',
        }}
      >
        {fieldname}
      </Button>
    </div>
  );
}
