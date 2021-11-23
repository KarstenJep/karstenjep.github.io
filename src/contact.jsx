import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// Files
import Header from './header.jsx';
import './contact.css';
// M-UI
import PublishIcon from '@mui/icons-material/Publish';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

export default function Contact() {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    // Import and format current date via moment.js
    const date = moment().format('MMMM Do YYYY, h:mm:ss a');

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
        console.log('hs. name:', name, email, message);
        dispatch({
            type: 'NEWMSG',
            // Pass in the username, that we're tracking in state
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

            {/* Tech Stack */}
            <div className="chips">
                <Stack spacing={1} alignItems="center" >
                    <Stack direction="row" spacing={1}>
                        <Chip label="JavaScript" color="primary" />
                        <Chip label="Node" color="success" />
                        <Chip label="SQL" color="primary" />
                        <Chip label="PostrgreSQL" color="success" />
                        <Chip label="CSS" color="primary" />
                        <Chip label="Python" color="success" />
                        <Chip label="HTML" color="primary" />
                        <Chip label="Git" color="success" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label="React" color="primary" variant="outlined" />
                        <Chip label="jQuery" color="success" variant="outlined" />
                        <Chip label="Saga" color="primary" variant="outlined" />
                        <Chip label="Redux" color="success" variant="outlined" />
                        <Chip label="Express" color="primary" variant="outlined" />
                        <Chip label="AJAX" color="success" variant="outlined" />
                        <Chip label="Material-UI" color="primary" variant="outlined" />
                        <Chip label="Passport" color="success" variant="outlined" />
                    </Stack>
                </Stack>
            </div>
         
        </section>
        </>
    )
}
