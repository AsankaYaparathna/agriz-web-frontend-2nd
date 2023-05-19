import React, { useEffect, useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Log } from '../../services/Log';

const SearchBar = ({onSearchChange}) => {
  const [searchValue, setSearchChange] = useState([]);

  const handleChange = (event) => {
    setSearchChange(event.target.value);
    const value = event.target.value;
    onSearchChange(value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
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
