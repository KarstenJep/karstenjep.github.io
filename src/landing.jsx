import React from 'react';
import './Landing.css';
// M-UI
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import { Stack } from '@mui/material';

export default function LandingPage() {

    return (
        <div className="landingBackground">
          {/* Floating Clouds */}
            <div className="cloud-content">
                <div className="cloud"></div>
                <div className="cloud x"></div>
            </div>
            <div className="cloud-content2">
                <div className="cloud"></div>
                <div className="cloud x"></div>
            </div>
          {/* About Blurb */}
            <div className="container">
                <Stack 
                    spacing={'1vh'} 
                    alignItems="center" 
                    padding={'2.5vh 4%'}
                    >
                    <span className="container-title">
                        Welcome!&nbsp;
                        <PeopleIcon 
                            fontSize="clamp(1.6rem, 5vw, 2.8rem)" 
                            style={{marginBottom: '-.6vh'}}/>
                    </span>
                    <span className="container-text">
                        I believe in following life passions and enjoying your work. 
                        I'm fervent for responsive, modular, and intuitive frontend design. 
                        I'm ardent about robust, scalable, and performant backend services. 
                        When not developing, I'm inspired by the great outdoors.
                        <br/>Here's to life's passions.
                    </span>
                </Stack>
            </div>
        </div>
    )
}
