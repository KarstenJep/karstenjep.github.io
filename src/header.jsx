import React from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '@mui/material/Button'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import './header.css';


export default function Header() {

    const history = useHistory();
    // using params to determine which button to show (based on the current page)
    const {id} = useParams();

    const linkedIn = () => {
        window.location.href="https://www.linkedin.com/in/karsten-jepsen-067a67a2/";
    }

    const email = () => {
        history.push('/contact/2');
    }

    const home = () => {
        history.push('/home/1');
    }

    const github = () => {
        window.location.href="https://github.com/KarstenJep";
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
                        variant="outlined" 
                        color="primary"
                        size="small"
                        style={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '10px'}}
                        endIcon={<LinkedInIcon />}
                        onClick={() => linkedIn()}
                    >
                      LinkedIn
                    </Button>
                </div>
                <div className="soc"> 
                    {/* Home / Contact btn */}
                    <Button 
                        type="submit" 
                        variant="outlined" 
                        color="primary"
                        size="small"
                        style={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '10px'}}
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
                        variant="outlined" 
                        color="primary"
                        size="small"
                        style={{ color: 'black', fontFamily: 'BioRhyme', fontSize: '10px'}}
                        endIcon={<GitHubIcon />}
                        onClick={() => github()}
                    >
                      Github
                    </Button>
                </div>
            </div>
        </header>
    </section>
  )
}