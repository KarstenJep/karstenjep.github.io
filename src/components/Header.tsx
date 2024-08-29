import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
// M-UI
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('1');
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/contact':
        setValue('3');
        break;
      case '/portfolio':
        setValue('2');
        break;
      default:
        setValue('1');
    }
  }, [pathname]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ffffff',
        opacity: '.85',
        padding: '.5vh',
        width: '80%',
        margin: '0 10%',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Title */}
          <Typography
            noWrap
            sx={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2.8rem)',
              ml: '.5vw',
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'BioRhyme',
              fontWeight: 700,
              letterSpacing: '.3vw',
              color: 'black',
              flexGrow: 1,
              textShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            Karsten Jepsen
          </Typography>

          {/* Nav - Small view */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', lg: 'none' },
            }}
          >
            <IconButton
              aria-label="menu options"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon sx={{ fontSize: 'clamp(1.6rem, 5vw, 2.8rem)' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block' },
              }}
            >
              <MenuItem
                key={1}
                onClick={handleCloseNavMenu}
                sx={{ width: '50vw', justifyContent: 'right' }}
              >
                <Typography
                  style={{ fontFamily: 'BioRhyme', fontSize: '20px' }}
                  onClick={() => navigate(`/`)}
                >
                  {'About  '}
                  <PeopleIcon style={{ margin: '0 0 -.5vh' }} />
                </Typography>
              </MenuItem>
              <MenuItem
                key={2}
                onClick={handleCloseNavMenu}
                sx={{ width: '50vw', justifyContent: 'right' }}
              >
                <Typography
                  style={{ fontFamily: 'BioRhyme', fontSize: '20px' }}
                  onClick={() => navigate(`/portfolio`)}
                >
                  {'Portfolio  '}
                  <BusinessCenterIcon style={{ margin: '0 0 -.5vh' }} />
                </Typography>
              </MenuItem>
              <MenuItem
                key={3}
                onClick={handleCloseNavMenu}
                sx={{ width: '50vw', justifyContent: 'right' }}
              >
                <Typography
                  style={{ fontFamily: 'BioRhyme', fontSize: '20px' }}
                  onClick={() => navigate(`/contact`)}
                >
                  {'Contact  '}
                  <EmailIcon style={{ margin: '0 0 -.5vh' }} />
                </Typography>
              </MenuItem>
              <MenuItem
                key={4}
                onClick={handleCloseNavMenu}
                sx={{ width: '50vw', justifyContent: 'right' }}
              >
                <Typography
                  style={{ fontFamily: 'BioRhyme', fontSize: '20px' }}
                  onClick={() =>
                    (window.location.href = 'https://github.com/KarstenJep')
                  }
                >
                  {'GitHub  '}
                  <GitHubIcon style={{ margin: '0 0 -.5vh' }} />
                </Typography>
              </MenuItem>
              <MenuItem
                key={5}
                onClick={handleCloseNavMenu}
                sx={{ width: '50vw', justifyContent: 'right' }}
              >
                <Typography
                  style={{ fontFamily: 'BioRhyme', fontSize: '20px' }}
                  onClick={() =>
                    (window.location.href =
                      'https://www.linkedin.com/in/karsten-jepsen-067a67a2/')
                  }
                >
                  {'LinkedIn  '}
                  <LinkedInIcon style={{ margin: '0 0 -.5vh' }} />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Nav - Large view */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'none', lg: 'flex' },
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList>
                  <Tab
                    label="About"
                    value="1"
                    onClick={() => navigate(`/`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<PeopleIcon />}
                    iconPosition="end"
                  />
                  <Tab
                    label="Portfolio"
                    value="2"
                    onClick={() => navigate(`/portfolio`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<BusinessCenterIcon />}
                    iconPosition="end"
                  />
                  <Tab
                    label="Contact"
                    value="3"
                    onClick={() => navigate(`/contact`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<EmailIcon />}
                    iconPosition="end"
                  />
                </TabList>
              </Box>
            </TabContext>
          </Box>

          {/* Nav - Medium View */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', lg: 'none' },
            }}
          >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList>
                  <Tab
                    value="1"
                    onClick={() => navigate(`/`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<PeopleIcon />}
                    iconPosition="end"
                  />
                  <Tab
                    value="2"
                    onClick={() => navigate(`/portfolio`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<BusinessCenterIcon />}
                    iconPosition="end"
                  />
                  <Tab
                    value="3"
                    onClick={() => navigate(`/contact`)}
                    sx={{
                      color: 'black',
                      fontFamily: 'BioRhyme',
                      fontSize: '1vw',
                      mb: -1,
                    }}
                    icon={<EmailIcon />}
                    iconPosition="end"
                  />
                </TabList>
              </Box>
            </TabContext>
          </Box>

          {/* Socials - Large, Med view */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
            }}
          >
            <Tooltip title="Github">
              <IconButton
                sx={{ px: '.5vw' }}
                onClick={() =>
                  window.open('https://github.com/KarstenJep', '_blank')
                }
              >
                <GitHubIcon
                  style={{ color: 'black', fontSize: 'clamp(2rem, 3vw, 4rem' }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                sx={{ px: '.5vw' }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/karsten-jepsen-067a67a2/',
                    '_blank',
                  )
                }
              >
                <LinkedInIcon
                  style={{
                    color: 'black',
                    fontSize: 'clamp(2rem, 3.4vw, 4.5rem',
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
