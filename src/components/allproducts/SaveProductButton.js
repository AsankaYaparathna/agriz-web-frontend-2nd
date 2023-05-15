import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        startIcon={<FavoriteIcon />}
        style={{
          backgroundColor: 'rgba(81, 146, 89, 0.34)',
          color: 'rgba(92, 90, 90, 1)',
        }}
      >
        Save
      </Button>
    </Stack>
  );
}
