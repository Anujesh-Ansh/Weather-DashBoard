import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        py: 3,
        textAlign: 'center',
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <Container maxWidth="lg">
        <MuiLink
          href="https://github.com/your-github-username"
          color="inherit"
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <Typography variant="body1" sx={{ fontSize: '1rem' }}>
            Made with <span role="img" aria-label="heart">🧡</span> by Anujesh Ansh
          </Typography>
        </MuiLink>
      </Container>
    </Box>
  );
}

export default Footer;
