import { Switch, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

export default function SwitchWithTypography() {
  return (
    <div>
      <Grid2 container alignItems="center">
        <Grid2 item>
          <Switch defaultChecked />
        </Grid2>
        <Grid2 item>
          <Typography>Remember Me</Typography>
        </Grid2>
      </Grid2>
    </div>
  );
}
