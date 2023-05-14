import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div
      style={{
        width: '25%',
        //   position: 'fixed',
        top: '200px',
        right: '20px',
      }}
    >
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleChange}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
