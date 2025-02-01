'use client'
import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  IconButton
} from '@mui/material'
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest
} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    console.log(`Subscribed with: ${email}`)
  }

  return (
    <>
      <footer>
        <Box sx={{ backgroundColor: 'black', width: '100%', padding: '50px' }}>
          <Container maxWidth={false} sx={{ width: '100%', padding: 0 }}>
            <Grid container spacing={4}>
              {/* Quick Links Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ffffff',
                    marginBottom: '20px',
                    borderBottom: '2px solid #e0e0e0',
                    display: 'inline-block' // Ensures the border only spans the text
                  }}
                >
                  Quick Links
                </Typography>
                <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/shop' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Category
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/privacy-policy' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Privacy Policy
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/refund-return' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Returns & Refund Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/shipping-delivery' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Shipping and Delivery Policies
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/policy/term-condition' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Terms of Service
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/faq' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Help & FAQ
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>

              {/* Support Links Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ffffff',
                    marginBottom: '20px',
                    borderBottom: '2px solid #e0e0e0',
                    display: 'inline-block' // Ensures the border only spans the text
                  }}
                >
                  Support Links
                </Typography>
                <Box component='ul' sx={{ listStyleType: 'none', padding: 0 }}>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/track-order' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Track Order
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/support-ticket' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Ticket Raise
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/return' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Return
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/warranty-registration' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Warranty Registration
                      </Typography>
                    </Link>
                  </Box>
                  <Box component='li' sx={{ marginBottom: '10px' }}>
                    <Link href='/support/contact-us' passHref>
                      <Typography
                        sx={{
                          color: '#9a9b9c',
                          '&:hover': { color: '#f37321' },
                          textDecoration: 'none',
                          fontSize: '0.875rem'
                        }}
                      >
                        Contact
                      </Typography>
                    </Link>
                  </Box>
                  {/* <Box component="li" sx={{ marginBottom: "10px" }}>
                    <Link href="/about" passHref>
                      <Typography
                        sx={{
                          color: "#9a9b9c",
                          "&:hover": { color: "#f37321" },
                          textDecoration: "none",
                          fontSize: "0.875rem",
                        }}
                      >
                        About
                      </Typography>
                    </Link>
                  </Box> */}
                </Box>
              </Grid>

              {/* Get in Touch Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant='h6'
                  sx={{
                    color: '#ffffff',
                    marginBottom: '20px',
                    borderBottom: '2px solid #e0e0e0',
                    display: 'inline-block' // Ensures the border only spans the text
                  }}
                >
                  Get In Touch
                </Typography>

                <Typography variant='body2' sx={{ color: '#9a9b9c', paddingRight:'10px' }}>
                  Have questions? Visit at:
                  <Link
                    href='https://maps.app.goo.gl/hZgUhCbYwkugGsHx8'
                    passHref
                  >
                    Digital Telemedia Technology Pvt. Ltd., 
                    E-169, E Block,
                    Sector 63, Noida,
                    Uttar Pradesh 201301.
                  </Link>
                </Typography>
              </Grid>

              {/* Newsletter Section */}
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  mt={1}
                  sx={{
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Light shadow effect
                    borderRadius: '8px', // Keep border radius for a smooth look
                    overflow: 'hidden' // Ensures rounded corners are applied to iframe
                  }}
                >
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7004.450094540938!2d77.3867099!3d28.6230165!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce5539e0d42b7%3A0x682b86960f5749cc!2sDigital%20Telemedia%20Technology%20Pvt.%20Ltd.%20E-169%20E%20Block%2C%20Sector%2063%20Noida%2C%20Hazratpur%20Wajidpur%2C%20Uttar%20Pradesh%20201301!3m2!1d28.623015199999998!2d77.3867281!5e0!3m2!1sen!2sin!4v1723628516193!5m2!1sen!2sin'
                    width='100%'
                    height='auto'
                    style={{ border: 0 }}
                    loading='lazy'
                  ></iframe>
                </Box>
              </Grid>
            </Grid>

            {/* Footer Bottom Section */}
            <Grid
              container
              justifyContent='center'
              sx={{ marginTop: '30px', paddingTop: '20px', color: 'white' }}
            >
              <Grid item xs={12} textAlign='center'>
                <Typography variant='body2'>
                  Contact us at:{' '}
                  <Link
                    href='mailto:operations@myzk.in'
                    style={{ color: '#9a9b9c', textDecoration: 'none' }}
                  >
                    operations@myzk.in
                  </Link>
                </Typography>

                {/* Social Media Icons */}
                <Box sx={{ marginTop: '10px' }}>
                  <IconButton href='https://www.facebook.com/profile.php?id=61558117619997' color='inherit'>
                    <Facebook />
                  </IconButton>
                  {/* <IconButton href='#' color='inherit'>
                    <Twitter />
                  </IconButton> */}
                  <IconButton href='https://www.instagram.com/myzk.india/' color='inherit'>
                    <Instagram />
                  </IconButton>
                  <IconButton href='https://youtube.com/@digitaltelemedia?si=FiQuIkBPbpcbhxVI' color='inherit'>
                    <YouTube />
                  </IconButton>
                  <IconButton href='https://pin.it/21nc7Xf1a' color='inherit'>
                    <Pinterest />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Copyright Section */}
        <Grid
          container
          justifyContent='center'
          sx={{ backgroundColor: 'white', padding: '20px 0', width: '100%' }}
        >
          <Grid item xs={12} textAlign='center'>
            <Typography variant='body2' component='div'>
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{' '}
              <Box
                component='span'
                sx={{ display: 'inline-block', verticalAlign: 'middle' }}
              >
                <img src='/img/myzk logo.png' width='100px' alt='Myzk' />
              </Box>
            </Typography>
          </Grid>
          {/* <Grid item xs={12} textAlign="center">
            <Typography variant="body2">
              Copyright &copy; {new Date().getFullYear()} All rights reserved by{" "}
              <span>
                <image src="/img/myzklogo.png" width="100px" alt="Myzk" />
              </span>
            </Typography>
          </Grid> */}
        </Grid>
      </footer>
    </>
  )
}

export default Footer
