import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'rgba(81, 146, 89, 1)',
    color: '#fff',
    width: 208,
    height: 45,
    '&:hover': {
      backgroundColor: 'rgba(81, 146, 89, 0.8)',
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const ProductViewSaveButton = () => {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button}>
      <FavoriteIcon className={classes.icon} />
      SAVE
    </Button>
  );
};

export default ProductViewSaveButton;
