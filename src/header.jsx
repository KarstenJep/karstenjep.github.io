import React from 'react';
import { useHistory, useParams } from 'react-router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button'
import './header.css';


export default function Header() {

    const history = useHistory();
    // using params to determine which button to show (based on the current page)
    const {id} = useParams();

    const email = () => {
        history.push('/contact/2');
    }

    const home = () => {
        history.push('/home/1');
    }


  return (
    <section className="headerBody">
        <header>
            {/* Name */}
            <h1 className="name"><u>Karsten Jepsen</u></h1>
            {/* Title */}
            <h3 className="subtitle"><u>Full Stack Software Engineer</u></h3>
            {/* Links section */}
            <div className="socials">
                <div className="soc">  
                    {/* Linkedin btn */}
                    <Button 
                        type="submit" 
                        variant="text" 
                        color="primary"
                        size="small"
                        style={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '11px'}}
                        endIcon={<LinkedInIcon />}
                        onClick={() => window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/"}
                    >
                      LinkedIn
                    </Button>
                </div>
                <div className="socMain"> 
                    {/* Home / Contact btn */}
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="success"
                        size="small"
                        style={{ color: 'black', backgroundColor: 'lightblue', fontFamily: 'BioRhyme', fontSize: '11px' }}
                        endIcon={id === '2' ? <HomeIcon /> : <EmailIcon />}
                        onClick={id === '2' ? () => home() : () => email()}                        
                    >
                        {id === '2' ? 'Home': 'Contact'} 
                    </Button>
                </div>
                <div className="soc">
                    {/* Github Btn */}
                    <Button 
                        type="submit" 
                        variant="text" 
                        color="primary"
                        size="small"
                        style={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '11px'}}
                        endIcon={<GitHubIcon />}
                        onClick={() => window.location.href="https://github.com/KarstenJep"}
                    >
                      Github
                    </Button>
                </div>
            </div>
        </header>
    </section>
  )
}
