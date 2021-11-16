import React from 'react';
import Header from './header.jsx';
import { useHistory } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './landing.css';


export default function LandingPage() {
  
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="landingBackground">
        <div className="login">
        <h3>Submit Your Name To Continue</h3>
        <Box p={2} mt={-3}>
          <TextField
                className="input"
                type="text"
                label="Name"
                variant="filled"
                color="primary"
                // value={username}
                // onChange={(event) => setUsername(event.target.value)}
                size="large"
          />
        </Box>
        <Button 
            style={{backgroundColor: 'black', fontFamily: 'BioRhyme'}}
            size="large" 
            type="submit" 
            value="Log In" 
            variant="contained" 
            color="secondary"
            onClick={() => history.push(`/home/1`)}
            >
            Submit
          </Button>
      </div>
    </div>
    </>
  )
}
