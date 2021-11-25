import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// Files
import Header from './header.jsx';
import TechStack from './TechStack'
import './contact.css';
// M-UI
import PublishIcon from '@mui/icons-material/Publish';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function Contact() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    // Import and format current date via moment.js
    const date = moment().format('MM DD YYYY');

    const validateForm = (e) => {
        e.preventDefault();
        if (name === ''){
            setNameError(true)
        } else if (email === ''){
            setEmailError(true)
        } else if (message === ''){
            setMessageError(true)
        } else {
            handleSubmit(e)
        }
    }

    const handleSubmit = (e) => {
        dispatch({
            type: 'NEW_MSG',
            payload: {
                name: name,
                date: date,
                email: email,
                message: message,
            }
        });
        // Clear the form field
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
    };

    
    return (
        <>
        <Header />

        <section className="contactBackground">
            {/* Message Form */}
            <div className="formBackground"> 
                <Grid container spacing={1} pt={1} pb={2}>
                    <Grid item xs={12}>
                        <h1 className="sayHi">Leave A Message</h1>
                    </Grid>
                    <Grid item xs={4} ml={2.1}>
                        <TextField
                            // Name Input
                            label="Name"
                            variant="outlined"
                            color="success"
                            size="small"
                            style={{ width: '95%' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={nameError} 
                            />
                    </Grid>
                    <Grid item xs={7} ml={-.5}>
                        <TextField 
                            // Email Input 
                            label="Email"
                            variant="outlined"
                            color="success"
                            size="small"
                            style={{ width: '100%' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError} 
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            // Message body
                            label="Message"
                            color="success"
                            multiline 
                            rows={3} 
                            style={{ width: '90%'}} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={messageError} 
                            />
                    </Grid>
                    <Grid item xs={12} mt={.5}>
                        <Button
                            // Submit Btn
                            type="submit"
                            style={{  fontFamily: 'BioRhyme', width: '60%', color: 'black' }}
                            variant="contained" 
                            color="success"
                            endIcon={<PublishIcon />}
                            onClick={(e) => validateForm(e)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>

            <TechStack />
        </section>
        </>
    )
}
