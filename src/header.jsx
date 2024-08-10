import React from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-scroll'
import './header.css';
// M-UI
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
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
  const [value, setValue] = React.useState('1');
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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

    <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke', opacity: '.8', padding: '.5vh', width: '80%', margin: '0 10%', boxShadow:  '0px 6px 12px rgb(0, 0, 0, 0.7)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        {/* Name */}
          <Typography
            fontSize={44}
            noWrap
            component="div"
            sx={{ ml: 2, mr: 4, color: 'black', fontFamily: 'BioRhyme', display: { xs: 'none', md: 'flex' } }}
          >
            Karsten Jepsen
          </Typography>
        {/* Navbar */}
          <Box sx={{ width: '30%', ml: '3%', display: { xs: 'none', md: 'flex' } }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 0 }}>
                <TabList onChange={handleChange} >
                  <Tab 
                    label="About" 
                    value="1" 
                    onClick={() => navigate(`/`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '18px', mb: -1 }}
                    icon={ <PeopleIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Portfolio" 
                    value="2" 
                    onClick={() => navigate(`/portfolio`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '18px', mb: -1  }}
                    icon={ <BusinessCenterIcon /> } iconPosition="end"
                    />
                  <Tab 
                    label="Contact" 
                    value="3" 
                    onClick={() => navigate(`/contact`)} 
                    sx={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '18px', mb: -1  }}
                    icon={ <EmailIcon /> } iconPosition="end"
                    />
                </TabList>
              </Box>
            </TabContext>
          </Box>
        {/* Links section */}
          <Box sx={{ flexGrow: 0, ml: '24%', display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Github">
              <IconButton
                  sx={{mr: 0 }}
                  onClick={() => window.open("https://github.com/KarstenJep", '_blank')} 
              >
                  <GitHubIcon style={{color: "black", fontSize: "4.5vh"}} />
            </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton 
                  sx={{ mr: 0 }}
                  onClick={() => window.open("https://www.linkedin.com/in/karsten-jepsen-067a67a2/", '_blank')}
              >
                  <LinkedInIcon style={{color: "black", fontSize: "5vh"}} />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ ml: -2, color: 'black' }}
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
                <>
                <Link to="aboutMe" offset={-100} spy={true} smooth={true} duration={2500}>
                    <MenuItem key={1} onClick={handleCloseNavMenu}>
                        <Typography 
                            style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                        >
                            {'About  '}<PeopleIcon style={{margin: '0 0 -1vh'}}/>
                        </Typography>
                    </MenuItem>
                </Link >
                <Link to="portfolio" offset={350} spy={true} smooth={true} duration={4000}>
                    <MenuItem  key={2} onClick={handleCloseNavMenu}>
                        <Typography
                            style={{fontFamily: 'BioRhyme', fontSize: '20px'}}
                        >
                            {'Portfolio  '}<BusinessCenterIcon style={{margin: '0 0 -1vh'}}/>
                        </Typography>
                    </MenuItem>
                </Link >
                </>
                <MenuItem key={3} onClick={handleCloseNavMenu}>
                    <Typography 
                        style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                        onClick={() => navigate(`/contact`)}
                    >
                        {'Contact  '}<EmailIcon style={{margin: '0 0 -1vh'}}/>
                    </Typography>
                </MenuItem>
                  <MenuItem key={4} onClick={handleCloseNavMenu}>
                    <Typography 
                      style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                      onClick={() => navigate(`/portfolio`)}
                    >
                      {'Home '}<HomeIcon style={{margin: '0 0 -1vh'}}/>
                     </Typography>
                 </MenuItem>
                <MenuItem key={5} onClick={handleCloseNavMenu}>
                  <Typography 
                      style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                      onClick={() => window.location.href="https://github.com/KarstenJep"}
                    >
                      {'GitHub  '}<GitHubIcon style={{margin: '0 0 -1vh'}}/>
                    </Typography>
                </MenuItem>
                <MenuItem key={6} onClick={handleCloseNavMenu}>
                  <Typography 
                    style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                    onClick={() => window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/"}
                  >
                    {'LinkedIn  '}<LinkedInIcon style={{margin: '0 0 -1vh'}}/>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            fontSize={26}
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: 'black', fontFamily: 'BioRhyme', display: { xs: 'flex', md: 'none' } }}
          >
            Karsten Jepsen
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}