import React from 'react';
import { useHistory, useParams } from 'react-router';
import {Link} from 'react-scroll'
import './header.css';
// M-UI
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
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


export default function Header() {

    const history = useHistory();
    // using params to determine which button to show (based on the current page)
    const {id} = useParams();
    const {username} = useParams();

    const email = () => {
        history.push(`/visitor=${username}/contact/2`);
    }

    const home = () => {
        history.push(`/visitor=${username}/home/1`);
    }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
            sx={{ ml: 2, mr: 0, color: 'black', fontFamily: 'BioRhyme', display: { xs: 'none', md: 'flex' } }}
          >
            Karsten Jepsen
          </Typography>
          { id === '1' ? 
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="aboutMe" offset={-170} spy={true} smooth={true} duration={2500}>
                  <Button
                    className='link'
                    variant="text" 
                    sx={{ ml: 10, mt: .5, color: 'black', display: 'flex', fontFamily: 'BioRhyme', fontSize: '14px' }}
                    endIcon={ <PeopleIcon fontSize='large' /> }
                >
                    About
                </Button>
              </Link>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="portfolio" offset={400} spy={true} smooth={true} duration={4000} underline="hover">
                <Button
                    className='link'
                    variant="text" 
                    sx={{ mr: 0, mt: .5, color: 'black', display: 'flex', fontFamily: 'BioRhyme', fontSize: '14px' }}
                    endIcon={ <BusinessCenterIcon /> }
                >
                    Portfolio
                </Button>
              </Link>
              </Box>
              </>
              :
              <>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Box sx={{ flexGrow: 1 }}></Box>
              </>
          }
          <Box sx={{ flexGrow: 0, mr: 5, display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="contained"
                style={{ color: 'black', backgroundColor: 'lightblue', display: 'flex', fontFamily: 'BioRhyme', width: '9rem', fontSize: '14px' }}
                endIcon={id === '2' ? <HomeIcon /> : <EmailIcon />}
                onClick={id === '2' ? () => home() : () => email()}  
              >
                {id === '2' ? 'Return': 'Contact'} 
              </Button>
          </Box>
          {/* Links section */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="Github">
                <IconButton
                    sx={{mr: -1 }}
                    onClick={() => window.location.href="https://github.com/KarstenJep"} 
                >
                    <GitHubIcon fontSize="large"  style={{color: "black"}} />
                </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="LinkedIn">
                <IconButton 
                    sx={{ mr: 0 }}
                    onClick={() => window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/"}
                >
                    <LinkedInIcon fontSize="large" style={{color: "black"}} />
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
                { id === '1' && 
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
                }
                { id !== '2' &&
                <MenuItem key={3} onClick={handleCloseNavMenu}>
                    <Typography 
                        style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                        onClick={() => email()}
                    >
                        {'Contact  '}<EmailIcon style={{margin: '0 0 -1vh'}}/>
                    </Typography>
                </MenuItem>
                }
                { id === '2' &&
                     <MenuItem key={4} onClick={handleCloseNavMenu}>
                     <Typography 
                         style={{fontFamily: 'BioRhyme', fontSize: '20px'}} 
                         onClick={() => home()}
                     >
                         {'Home '}<HomeIcon style={{margin: '0 0 -1vh'}}/>
                     </Typography>
                 </MenuItem>
                }
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