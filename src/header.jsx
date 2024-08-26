import React, { useState } from 'react';
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
  // Retrieve the stored value from sessionStorage or use the initial value
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue
  // Initialize state with the stored value or the initial value
  const [value, setValue] = useState(initial);

  const setStoredValue = (newValue) => {
    setValue(newValue);
    // Store the new value in sessionStorage
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };
  return [value, setStoredValue];
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
    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke', opacity: '.8', padding: '.5vh', width: '80%', margin: '0 10%'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* Title - Large view */}
          <Typography
            noWrap
            sx={{
              fontSize: 'clamp(1.3rem, 2.5vw, 2.5rem)',
              ml: '.5vw',
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
              fontFamily: 'BioRhyme',
              fontWeight: 700,
              letterSpacing: '.3vw',
              color: 'black',
              flexGrow: 1
            }}
          >
            Karsten Jepsen
          </Typography>

        {/* Nav - Small view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
            <IconButton
              aria-label="menu options"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon sx={{ fontSize: '5vw' }} />
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
              <MenuItem key={1} onClick={handleCloseNavMenu} sx={{ width: '50vw', justifyContent: 'right'}}>
                <Typography 
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}}
                    onClick={() => navigate(`/`)} 
                >
                    {'About  '}<PeopleIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem>
              <MenuItem  key={2} onClick={handleCloseNavMenu} sx={{ width: '50vw', justifyContent: 'right'}}>
                <Typography
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}}
                    onClick={() => navigate(`/portfolio`)} 
                >
                    {'Portfolio  '}<BusinessCenterIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem >
              <MenuItem key={3} onClick={handleCloseNavMenu} sx={{ width: '50vw', justifyContent: 'right'}}>
                  <Typography 
                      style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                      onClick={() => navigate(`/contact`)}
                  >
                      {'Contact  '}<EmailIcon style={{margin: '0 0 -.5vh'}}/>
                  </Typography>
              </MenuItem>
              <MenuItem key={4} onClick={handleCloseNavMenu} sx={{ width: '50vw', justifyContent: 'right'}}>
                <Typography 
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                    onClick={() => window.location.href="https://github.com/KarstenJep"}
                  >
                    {'GitHub  '}<GitHubIcon style={{margin: '0 0 -.5vh'}}/>
                  </Typography>
              </MenuItem>
              <MenuItem key={5} onClick={handleCloseNavMenu} sx={{ width: '50vw', justifyContent: 'right'}}>
                <Typography 
                  style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                  onClick={() => window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/"}
                >
                  {'LinkedIn  '}<LinkedInIcon style={{margin: '0 0 -.5vh'}}/>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          
        {/* Nav - Large view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex' }}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} >
                  <Tab 
                    label="About" 
                    value="1" 
                    onClick={() => navigate(`/`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1 }}
                    icon={ <PeopleIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Portfolio" 
                    value="2" 
                    onClick={() => navigate(`/portfolio`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1  }}
                    icon={ <BusinessCenterIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Contact" 
                    value="3" 
                    onClick={() => navigate(`/contact`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1  }}
                    icon={ <EmailIcon /> } iconPosition="end"
                    />
                </TabList>
              </Box>
            </TabContext>
          </Box>

          {/* Nav - Large view */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'none' }}}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} >
                  <Tab 
                    value="1" 
                    onClick={() => navigate(`/`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1 }}
                    icon={ <PeopleIcon /> } iconPosition="end"
                    />
                  <Tab 
                    value="2" 
                    onClick={() => navigate(`/portfolio`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1  }}
                    icon={ <BusinessCenterIcon /> } iconPosition="end"
                    />
                  <Tab 
                    value="3" 
                    onClick={() => navigate(`/contact`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '1vw', mb: -1  }}
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
                <GitHubIcon style={{color: "black", fontSize: "3vw"}} />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton 
                  sx={{ px: '.5vw' }}
                  onClick={() => window.open("https://www.linkedin.com/in/karsten-jepsen-067a67a2/", '_blank')}
              >
                <LinkedInIcon style={{color: "black", fontSize: "3.4vw"}} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}