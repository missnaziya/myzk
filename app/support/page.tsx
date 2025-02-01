
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const SupportPage = () => {
  return (
    <section>
        
      <Box
        sx={{
          padding: '40px 40px',
          backgroundColor: '#f8f8f8',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#f37321',
            marginBottom: '20px',
          }}
        >
          POPULAR HELP TOPICS
        </Typography>

        <Grid container spacing={4} sx={{ paddingTop: '20px' }}>
          {/* Track Your Order */}
          <Grid item xs={12} sm={4}>
            <Link href="/support/track-order" passHref>
              <Box
                sx={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  margin: '0px 10px',
                  padding: '30px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // Center the image horizontally
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src="/img/track.png"
                  alt="Track Your Order"
                  width={60}
                  height={60}
                  style={{
                    borderRadius: '8px',
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    marginTop: '10px',
                    fontSize: '18px',
                    color: '#333',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Track Your Order
                </Typography>
              </Box>
            </Link>
          </Grid>

          {/* Tickets */}
          <Grid item xs={12} sm={4}>
            <Link href="/support/support-ticket" passHref>
              <Box
                sx={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  margin: '0px 10px',
                  padding: '30px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // Center the image horizontally
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src="/img/tickets.png"
                  alt="Tickets"
                  width={60}
                  height={60}
                  style={{
                    borderRadius: '8px',
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    marginTop: '10px',
                    fontSize: '18px',
                    color: '#333',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Tickets
                </Typography>
              </Box>
            </Link>
          </Grid>

          {/* Warranty Registration */}
          <Grid item xs={12} sm={4}>
            <Link href="/support/warranty-registration" passHref>
              <Box
                sx={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  textAlign: 'center',
                  margin: '0px 10px',
                  padding: '30px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center', // Center the image horizontally
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src="/img/warranty.png"
                  alt="Warranty Registration"
                  width={60}
                  height={60}
                  style={{
                    borderRadius: '8px',
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    marginTop: '10px',
                    fontSize: '18px',
                    color: '#333',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  Warranty Registration
                </Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default SupportPage;