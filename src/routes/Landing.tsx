import React from 'react';
import './Landing.css';
import FloatingCloud from '../components/animations/FloatingCloud';
// M-UI
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import { Divider, Stack } from '@mui/material';

export default function LandingPage() {
  return (
    <div className="landing-background">
      <FloatingCloud />
      <FloatingCloud className={'cloud-content2'} />

      {/* About Blurb */}
      <div className="container landing-container">
        <Stack spacing={'1vh'} alignItems="center" padding={'2.5vh 4%'}>
          <span className="container-title">
            Welcome!&nbsp;
            <PeopleIcon
              style={{
                marginBottom: '-2.5%',
                fontSize: 'clamp(1.6rem, 4vw, 2.1rem)',
              }}
            />
          </span>
          <Divider
            orientation="horizontal"
            color="black"
            sx={{ width: '60%', border: 'solid .2vh' }}
          />
          <span className="container-text">
            {`I believe in following life passions and enjoying your work. 
                        I'm fervent for responsive, modular, and intuitive frontend design. 
                        I'm ardent about robust, scalable, and performant backend services. 
                        When not developing, I'm inspired by the great outdoors.`}
            <br />
            {`Here's to life's passions.`}
          </span>
        </Stack>
      </div>
    </div>
  );
}
