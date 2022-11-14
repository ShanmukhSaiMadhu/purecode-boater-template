import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Card, Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{backgroundColor: 'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{padding: '0 6rem', color: 'black', display: 'flex', justifyContent: 'space-between'}}>
        <Box
            align='center'
            component="img"
            sx={{
              height: '1.5rem',
              width: '10rem',
            }}
            alt="logo"
            src={logo}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Button variant="text" sx={{color: '#1b9bd7'}}>Sign In</Button>
            <Button sx={{backgroundColor: '#1b9bd7', padding: '0 0.5rem', borderRadius: '0', height: '2rem'}} size='small' variant="contained">Get Certified</Button>
            <Divider sx={{backgroundColor: '#1b9bd7', marginLeft: '0.5rem'}} orientation="vertical" variant="middle" flexItem />
            <IconButton aria-label="menu" >
              <MenuIcon sx={{color: '#1b9bd7'}} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;