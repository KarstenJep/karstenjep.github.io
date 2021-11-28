import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
// Files
import Header from './header.jsx';
import './landing.css';
// M-UI
import PublishIcon from '@mui/icons-material/Publish';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function LandingPage() {
  
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [nameError, setNameError] = useState(false);

  const validateForm = (e) => {
      // Don't reload on form submit
      e.preventDefault();
      // if username input is empty, set error
      if (username === ''){
        setNameError(true)
    } else {
        handleSubmit(e)
        dispatch({
            type: 'NEW_NAME',
            payload: {
                name: username
            }
        });
    }
  }

  const handleSubmit = (e) => {
      dispatch({
          type: 'USER',
          payload: username
      });
      // Send user to home page
      history.push(`/home/1`)
      // Clear the form field
      setUsername('');
  };
  
  return (
    <>
      {/* <Header /> */}
      <div className="landingBackground">
          {/* Floating Clouds */}
          <div class="cloud-content">
                <div className="cloud"></div>
                <div className="cloud x"></div>
          </div>
          <div className="login">
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    {/* Helper Text */}
                    <h3 style={{fontSize: '3vh'}}>Enter Your Name To Continue</h3>
                </Grid>
                <Grid item xs={12} mt={-1}>
                    <TextField
                        // Username Input 
                        className="input"
                        style={{backgroundColor: 'lightblue', width: '50%'}}
                        type="text"
                        label="First Name"
                        variant="filled"
                        color="primary"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        size="medium"
                        error={nameError}
                    />
                </Grid>
                <Grid item xs={12} m={1}>
                    <Button
                        // Submit User Btn
                        style={{backgroundColor: 'skyblue', fontFamily: 'BioRhyme', color: 'black', marginBottom: '2vh', marginTop: '1vh', width: "52%"}}
                        type="submit" 
                        value="Log In" 
                        variant="contained" 
                        endIcon={<PublishIcon />}
                        onClick={(e) => validateForm(e)}
                        >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    </div>
    </>
  )
}
