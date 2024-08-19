import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './header.css';
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


function useSessionStorage(key, initialValue) {
  const storedValue = JSON.parse(sessionStorage.getItem(key));
  const [value, setValue] = useState(storedValue || initialValue);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function Header() {

  const navigate = useNavigate();
  const [value, setValue] = useSessionStorage('value', 1);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke', opacity: '.8', padding: '.5vh', width: '80%', margin: '0 10%', boxShadow:  '0px 6px 12px rgb(0, 0, 0, 0.5)'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* Title - Large view */}
          <Typography
            fontSize={38}
            noWrap
            sx={{
              ml: '.5vw',
              display: { xs: 'none', md: 'none', lg: 'flex' },
              fontFamily: 'BioRhyme',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              flexGrow: 1
            }}
          >
            Karsten Jepsen
          </Typography>

        {/* Nav - Med, Small view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', lg: 'none' } }}>
            <IconButton
              aria-label="menu options"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon sx={{ width: '3.5vh', height: '3.5vh'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'block' },
              }}
            >
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Typography 
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}}
                    onClick={() => navigate(`/`)} 
                >
                    {'About  '}<PeopleIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem>
              <MenuItem  key={2} onClick={handleCloseNavMenu}>
                <Typography
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}}
                    onClick={() => navigate(`/portfolio`)} 
                >
                    {'Portfolio  '}<BusinessCenterIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem>
              <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <Typography 
                      style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                      onClick={() => navigate(`/contact`)}
                  >
                      {'Contact  '}<EmailIcon style={{margin: '0 0 -.5vh'}}/>
                  </Typography>
              </MenuItem>
              <MenuItem key={4} onClick={handleCloseNavMenu}>
                <Typography 
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                    onClick={() => window.location.href="https://github.com/KarstenJep"}
                  >
                    {'GitHub  '}<GitHubIcon style={{margin: '0 0 -.5vh'}}/>
                  </Typography>
              </MenuItem>
              <MenuItem key={5} onClick={handleCloseNavMenu}>
                <Typography 
                  style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                  onClick={() => window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/"}
                >
                  {'LinkedIn  '}<LinkedInIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          
        {/* Title - Med view */}
          <Typography
            variant="h4"
            noWrap
            sx={{
              display: { xs: 'none', md: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'BioRhyme',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
            }}
          >
            Karsten Jepsen
          </Typography>

        {/* Title - Small view */}
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: 'flex', md: 'none', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'BioRhyme',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
            }}
          >
            Karsten Jepsen
          </Typography>

        {/* Nav - Large view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex' }}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} >
                  <Tab 
                    label="About" 
                    value="1" 
                    onClick={() => navigate(`/`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '16px', mb: -1 }}
                    icon={ <PeopleIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Portfolio" 
                    value="2" 
                    onClick={() => navigate(`/portfolio`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '16px', mb: -1  }}
                    icon={ <BusinessCenterIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Contact" 
                    value="3" 
                    onClick={() => navigate(`/contact`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '16px', mb: -1  }}
                    icon={ <EmailIcon /> } iconPosition="end"
                    />
                </TabList>
              </Box>
            </TabContext>
          </Box>

          {/* Socials - Large, Med view */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', lg: 'flex' }}}>
            <Tooltip title="Github">
              <IconButton
                  sx={{px: '.5vw' }}
                  onClick={() => window.open("https://github.com/KarstenJep", '_blank')} 
              >
                <GitHubIcon style={{color: "black", fontSize: "4.5vh"}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton 
                  sx={{ px: '.5vw' }}
                  onClick={() => window.open("https://www.linkedin.com/in/karsten-jepsen-067a67a2/", '_blank')}
              >
                <LinkedInIcon style={{color: "black", fontSize: "5vh"}} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}