import React, {useState} from 'react';
import emailjs from "emailjs-com";
import './Contact.css';
import RollingWave from "./components/RollingWave.jsx";
// Imgs
import island from "./images/island.png";
import island2 from "./images/island2.png";
import mtn from "./images/mtn.png";
import mtn2 from "./images/mtn2.png";
import turtle from "./images/turtle.png";
import shark from "./images/shark.png";
import hut from "./images/hut.png";
import hammock from "./images/hammock.png";
import ship from "./images/ship.png";
// M-UI
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Stack } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [sentAlert, setSentAlert] = React.useState(false);

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
        emailjs.sendForm('service_ut2c8mq', 'template_q8jqjb7', e.target, 'user_Lupji84U8szKulL3UkKWj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // Clear the form field
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        // Activate snackbar alert
        setSentAlert(true);
    };

    // Close snackbar alert
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setSentAlert(false);
    };
    
    return (
        <>
        <section className="contact-background">
            <form onSubmit={validateForm} className="container"> 
                <Stack 
                    spacing={'1vh'} 
                    alignItems="center" 
                    padding={'2vh 4%'}
                    >
                    <span className="container-title">
                        Send A Message&nbsp; 
                        <EmailIcon 
                            fontSize="clamp(1.6rem, 5vw, 2.8rem)" 
                            style={{marginBottom: '-.8vh'}}/>
                    </span>
                    <Stack 
                        direction={'row'}
                        spacing={'1vh'}
                        sx={{ width: '90%'}}
                        >
                        <TextField
                            label="Name"
                            name="name"
                            variant="filled"
                            size="small"
                            style={{ width: '40%' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={nameError}
                            />
                        <TextField 
                            label="Email"
                            name="email"
                            variant="filled"
                            size="small"
                            style={{ width: '60%' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError} 
                            />
                    </Stack>
                    <TextField
                        label="Message"
                        name="message"
                        variant="filled"
                        multiline 
                        rows={4} 
                        style={{ width: '90%'}} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        error={messageError} 
                        />
                    <Button
                        type="submit"
                        style={{  fontFamily: 'BioRhyme', width: '30%', minWidth: '140px', borderRadius: '30px', margin: '2vh auto 1vh', fontSize: 'medium' }}
                        variant="contained" 
                        color="info"
                        endIcon={<SendIcon />}
                        >
                        Send
                    </Button>
                </Stack>
            </form>

            {/* Images */}
            <div className="sun3"></div>
            <div className="hill"></div>
            <div className="hill2"></div>
            <img src={island} alt="island" className="island" />
            <img src={island2} alt="island" className="island2" />
            <img src={mtn} alt="mountain" className="mtn" />
            <img src={mtn2} alt="mountain" className="mtn2" />
            <img src={turtle} alt="mountain" className="turtle" />
            <img src={shark} alt="mountain" className="shark" />
            <img src={hut} alt="hut" className="hut" />
            <img src={hammock} alt="hammock" className="hammock" />
            <img src={ship} alt="ship" className="ship" />

            <RollingWave />
        </section>

        {/* Snackbar Alert */}
        <Snackbar open={sentAlert} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ maxWidth: '100%' }}>
                <b>Message Received! Thanks!</b>
            </Alert>
        </Snackbar>
        </>
    )
}
