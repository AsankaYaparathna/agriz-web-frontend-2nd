import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';

export default function LoginTextFiledWithImage({ info }) {
  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>{info.icon}</IconButton>
            </InputAdornment>
          ),
        }}
        placeholder={info.placehoder}
      />
    </div>
  );
}
