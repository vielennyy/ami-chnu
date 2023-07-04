import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../../images/ami-logo.png';

import { useState } from 'react'
import { Menu, Typography, Toolbar, Box, AppBar, Container, Avatar, Button, Tooltip, MenuItem, IconButton } from '@mui/material'

const pages = ['Студенту', 'Абітурієнту', 'Кафедра', 'Контакти'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
    return <ResponsiveAppBar/>
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color='transparent' sx={{boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.05)', height: '100px', width:'100%', display: 'flex',
    alignItems: 'center', flexDirection:'row',
    justifyContent: 'space-between', padding: '0px 80px'}}>
            
                <Link to='/' style={{ textDecoration: 'none', color: 'black',width:'10vw'}}>
                <Box display='flex' alignItems='center' width='70vw'>
                    <img src={logo} width='100px' style={{marginRight:'2vw', cursor:'pointer'}}/>
                    <Typography
                        variant="h6"
                        // noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        Кафедра прикладної математики та інформатики
                    </Typography>
                    </Box>
                </Link>
                
            
          
            <Box width='50vw' color='red'></Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'}, alignItems: 'center' }}>
            <Link to={'/student'} style={{ textDecoration: 'none', }}>
                  <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                  >
                    Студенту
                  </Button>
                </Link>
                <Link to={'/abiturient'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                  >
                    Абітурієнту
                  </Button>
                </Link>
                <Link to={'/cathedra'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                  >
                    Кафедра
                  </Button>
                </Link>
                <Link to={'/contacts'} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ my: 2, 
                        color: 'black', 
                        display: 'block', 
                        margin: '1vw', 
                        '&:hover': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                        }
                    }}
                  >
                    Контакти
                  </Button>
                </Link>
          </Box>
    </AppBar>
  );
}


