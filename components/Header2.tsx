"use client"
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Grid,
  Button,
} from '@mui/material';
import { ShoppingCart, FavoriteBorder } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" sx={{ padding: '10px 0' }}>
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Link href="/" passHref>
              <Image src="/img/myzk logo.png" alt="IMG-LOGO" width={150} height={50} />
            </Link>
         

          {/* Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href="/" color="inherit">
              Home
            </Button>

            {/* Category Menu */}
            <Button
              color="inherit"
              onClick={handleMenuClick}
              aria-controls={isMenuOpen ? 'category-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isMenuOpen ? 'true' : undefined}
            >
              Category
            </Button>
            <Menu
              id="category-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'category-menu',
              }}
            >
              <MenuItem onClick={handleMenuClose}>Adaptor</MenuItem>
              <MenuItem onClick={handleMenuClose}>Data Cable</MenuItem>
              <MenuItem onClick={handleMenuClose}>Socket Board</MenuItem>
              <MenuItem onClick={handleMenuClose}>Water Level Controller</MenuItem>
              <MenuItem onClick={handleMenuClose}>WiFi Stability UPS</MenuItem>
            </Menu>

            <Button href="/new-products" color="inherit">
              New Arrivals
            </Button>
            <Button href="/support" color="inherit">
              Support
            </Button>
          </Box>

          {/* Icons */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton color="inherit" href="/shopping-cart">
              <ShoppingCart />
            </IconButton>
            <IconButton color="inherit" href="/wishlist">
              <FavoriteBorder />
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'mobile-menu',
              }}
            >
              <MenuItem href="/">Home</MenuItem>
              <MenuItem onClick={handleMenuClick}>Category</MenuItem>
              <MenuItem href="/new-products">New Arrivals</MenuItem>
              <MenuItem href="/support">Support</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header2;
