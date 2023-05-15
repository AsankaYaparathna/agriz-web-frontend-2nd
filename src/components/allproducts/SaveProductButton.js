import { Button } from '@mui/material';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SaveProductButton() {
  return (
    <div>
      <Button variant="outlined" startIcon={<FavoriteIcon />}>
        SAVE
      </Button>
    </div>
  );
}
