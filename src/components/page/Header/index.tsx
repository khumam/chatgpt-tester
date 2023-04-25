import { AppBar, Box, Button, Container, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar elevation={0} position='static'
      sx={{ backgroundColor: '#F6F6F6' }}>
      <Container maxWidth='lg'>
        <Box paddingY='14px' display='flex' alignItems='center' gap={2}>
          <Typography color='#333333' fontWeight={600}>Khoerul Umam</Typography>
          <Box display='flex'>
            <Button
              variant='contained'
              sx={{ textTransform: 'none', color: '#333333' }}>
              Home
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
