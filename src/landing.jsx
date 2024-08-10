import React from 'react';
import './landing.css';
// M-UI
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import Grid from '@mui/material/Grid';

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
            <div className="about-container">
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <h3 className="subtitles">
                            Welcome!&nbsp;
                            <PeopleIcon fontSize="large" style={{marginBottom: '-1vh'}}/>
                        </h3>
                        </Grid>
                        <Grid item xs={12}>
                        <p className="text" style={{fontSize: '2.3vh'}}>
                            I believe in following life passions and enjoying your work. 
                            I'm fervent for responsive, reusable, and intuitive frontend design. 
                            I'm ardent about robust and scalable backend services. 
                            I'm inspired by the great outdoors, and I'm enthusiastic about recreation.
                            Here's to life's passions.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
