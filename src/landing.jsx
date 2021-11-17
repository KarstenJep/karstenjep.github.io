import React, {useState} from 'react';
import Header from './header.jsx';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './landing.css';


export default function LandingPage() {
  
  const [username, setUsername] = useState('');
  const history = useHistory();
  // "dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      // Don't reload on form submit
      e.preventDefault();
      // Tell redux that we want to add the new user
      dispatch({
          type: 'USER',
          // Pass in the username, that we're tracking in state
          payload: username
      });
      // Send user to home page
      history.push(`/home/1`)
      // Clear the form field
      setUsername('');
  };
  
  return (
    <>
      <Header />
      <div className="landingBackground">
        <div className="login">
        {/* Helper Text */}
        <h3>Submit Your Name To Continue</h3>
        <Box p={2} mt={-3}>
          {/* User Input */}
          <TextField
                className="input"
                type="text"
                label="Name"
                variant="filled"
                color="primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="large"
          />
        </Box>
        {/* Submit User Btn */}
        <Button 
            style={{backgroundColor: 'skyblue', fontFamily: 'BioRhyme', color: 'black'}}
            size="large" 
            type="submit" 
            value="Log In" 
            variant="contained" 
            color="primary"
            onClick={(e) => handleSubmit(e)}
            >
            Submit
          </Button>
      </div>
    </div>
    </>
  )
}
