import React, {useState} from 'react';
import Header from './header.jsx';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import PublishIcon from '@mui/icons-material/Publish';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './landing.css';


export default function LandingPage() {
  
  const [username, setUsername] = useState('');
  const [nameError, setNameError] = useState(false);
  const history = useHistory();
  // "dispatch" is how we talk to redux from react
  const dispatch = useDispatch();

  const validateForm = (e) => {
      // Don't reload on form submit
      e.preventDefault();
      // if username input is empty, set error
      if (username === ''){
        setNameError(true)
    } else {
        handleSubmit(e)
    }
  }

  const handleSubmit = (e) => {
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
          {/* Floating Clouds */}
          <div class="cloud-content">
                <div class="cloud"></div>
                <div class="cloud x"></div>
          </div>
          <div className="login">
          {/* Helper Text */}
          <h3>Enter Your First Name To Continue</h3>
          <Box  m={2}>
            {/* User Input */}
            <TextField
                className="input"
                style={{color: 'skyblue', width: '50%'}}
                type="text"
                label="Name"
                variant="filled"
                color="primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="medium"
                error={nameError}
            />
          </Box>
          {/* Submit User Btn */}
          <Button 
              style={{backgroundColor: 'skyblue', fontFamily: 'BioRhyme', color: 'black', marginBottom: '2vh', marginTop: '1vh', width: "45%"}}
              type="submit" 
              value="Log In" 
              variant="contained" 
              endIcon={<PublishIcon />}
              onClick={(e) => validateForm(e)}
              >
              Submit
            </Button>
        </div>
    </div>
    </>
  )
}
