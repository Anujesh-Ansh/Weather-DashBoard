import { Autocomplete, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';

function TopButtons() {
  const cities = [
    'Gurgaon', 'Noida', 'Delhi', 'Mumbai', 'Pune', 'Ranchi', 'Lucknow', 
    'New York', 'Argentina', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];
  
  const [value, setValue] = useState();

  const filterOptions = (options, { inputValue }) => {
    return options.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(0, 5);
  };

  return (
    <Container>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='row'
        textAlign='center'
        my={-6}
        gap={2}
      >
        <Autocomplete
          sx={{ width: '30vw' }}
          options={cities}
          filterOptions={filterOptions}
          renderInput={(params) => <TextField {...params} label='City' />}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          freeSolo
        />
        <SearchIcon
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.4)',
            },
          }}
        />
        <MyLocationIcon
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.4)',
            },
          }}
        />

        <Box display='flex' justifyContent='center' alignItems='center' gap={-5} p={0} ml={3}>
          <Button
            sx={{
              color: 'white',
              padding: 0,
              minWidth: 9,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.4)',
              },
            }}
          >
            °C
          </Button>
          <Typography px={1} color='white'> | </Typography>
          <Button
            sx={{
              color: 'white',
              padding: 0,
              minWidth: 9,
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.4)',
              },
            }}
          >
            °F
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default TopButtons;
