import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Log } from '../../services/Log';

export default function ContainedButtons(product) {

  const [savedProducts, setSavedProducts] = useState([]);

  const SaveProduct = ()=>{
    //setSavedProducts(product,...product);

    Log(product);
  };


  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={SaveProduct}
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
