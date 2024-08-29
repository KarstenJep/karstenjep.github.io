import React, {useState} from 'react';
import emailjs from "emailjs-com";
import './Contact.css';
import RollingWave from "../components/animations/RollingWave";
import SnackbarAlert from '../components/SnackbarAlert';
// Imgs
import island from "../assets/images/island.png";
import island2 from "../assets/images/island2.png";
import mtn from "../assets/images/mtn.png";
import mtn2 from "../assets/images/mtn2.png";
import turtle from "../assets/images/turtle.png";
import shark from "../assets/images/shark.png";
import hut from "../assets/images/hut.png";
import hammock from "../assets/images/hammock.png";
import ship from "../assets/images/ship.png";
// M-UI
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import { Stack, Button, TextField, SnackbarCloseReason } from '@mui/material';

export default function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

    const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name === ''){
            setNameError(true)
        } else if (email === ''){
            setEmailError(true)
        } else if (message === ''){
            setMessageError(true)
        } else {
            handleSubmit(e)
            setNameError(false);
            setEmailError(false);
            setMessageError(false);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        emailjs.sendForm('service_ut2c8mq', 'template_q8jqjb7', e.currentTarget, 'user_Lupji84U8szKulL3UkKWj')
        .then((result) => {
            console.log(result.text);
            setName('');
            setEmail('');
            setMessage('');
            setShowSnackbar(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
        return;
        }
        setShowSnackbar(false);
    };
    
    return (
        <>
        <section className="contact-background">
          {/* Contact Form */}
            <form onSubmit={validateForm} className="container contact-container"> 
                <Stack 
                    spacing={'1vh'} 
                    alignItems="center" 
                    padding={'2vh 4%'}
                    >
                    <span className="container-title">
                        Contact Me&nbsp; 
                        <EmailIcon  
                            style={{marginBottom: '-.8vh', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)'}}/>
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
                        style={{  fontFamily: 'BioRhyme', width: '30%', minWidth: '140px', borderRadius: '30px', margin: '2.5vh auto 1vh', fontSize: 'medium' }}
                        variant="contained" 
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

            <SnackbarAlert showSnackBar={showSnackbar} handleClose={handleClose} />
        </section>
        </>
    )
}
