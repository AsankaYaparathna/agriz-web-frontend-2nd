import { Button } from '@mui/material';
import React from 'react';

export default function TopNavBarButton({ fieldname }) {
  return (
    <div>
      <Button
        style={{
          backgroundColor: 'rgba(217, 217, 217, 0.1)',
          color: 'rgba(70, 72, 72, 1)',
        }}
      >
        {fieldname}
      </Button>
    </div>
  );
}
