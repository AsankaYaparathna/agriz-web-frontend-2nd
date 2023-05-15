import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(217, 217, 217, 1)',
    height: '54px',
    width: '350px',
    padding: theme.spacing(2),
  },
  text: {
    color: 'rgba(6, 70, 53, 1)',
  },
}));

const MyComponent = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" className={classes.text}>
        0710905333
      </Typography>
    </Grid>
  );
};

export default MyComponent;
