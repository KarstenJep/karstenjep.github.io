import React, {useState} from 'react';
// import { useDispatch } from 'react-redux';
// import moment from 'moment';
import emailjs from "emailjs-com";
import TechStack from './TechStack'
import './contact.css';
// Imgs
import island from "./images/island.png";
import island2 from "./images/island2.png";
import mtn from "./images/mtn.png";
import mtn2 from "./images/mtn2.png";
import turtle from "./images/turtle.png";
import shark from "./images/shark.png";
import hut from "./images/hut.png";
// M-UI
import PublishIcon from '@mui/icons-material/Publish';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Stack } from '@mui/material';
// M-UI Snackbar alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {

    // const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    // Import and format current date via moment.js
    // const date = moment().format('MM DD YYYY');
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
        // Sending form to my inbox via email js so app can be deployed front end only. Commented out below is the code if using a database
        emailjs.sendForm('service_ut2c8mq', 'template_q8jqjb7', e.target, 'user_Lupji84U8szKulL3UkKWj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // dispatch({
        //     type: 'NEW_MSG',
        //     payload: {
        //         name: name,
        //         date: date,
        //         email: email,
        //         message: message,
        //     }
        // });
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
        <section className="contactBackground">
          {/* Message Form */}
            <form onSubmit={validateForm} className="container"> 
                <Stack 
                    spacing={'1vh'} 
                    alignItems="center" 
                    padding={'2vh 4%'}
                    >
                    <span className="container-title">
                        Leave A Message&nbsp; 
                        <EmailIcon 
                            fontSize="clamp(1.6rem, 5vw, 2.8rem)" 
                            style={{marginBottom: '-.8vh'}}/>
                    </span>
                    <Stack 
                        direction={'row'}
                        spacing={'1vh'}
                        sx={{ width: '90%'}}>
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
                        style={{  fontFamily: 'BioRhyme', width: '30%', borderRadius: '30px', margin: '2vh auto 1vh', fontSize: 'medium' }}
                        variant="contained" 
                        color="info"
                        endIcon={<PublishIcon />}
                    >
                        Submit
                    </Button>
                </Stack>
            </form>

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
            <img src={hut} alt="hut" className="hut2" />

            {/* Animation for wave */}
            <svg version="1.1" className="wave"
                xlmns="http://www.w3.org/200/svg">
                <path
                        d="
                        M0 67
                        C 273,183
                        822, -40
                        1920,106
                        V 600
                        H 0
                        V 67
                        Z
                        ">
                    <animate
                            repeatCount="indefinite"
                            attributeName="d"
                            dur="30s"
                            attributeType="XML"
                            values="
                                M0 77
                                C 473, 283
                                822, -40
                                1920, 116
                                V 600
                                H 0
                                V 300
                                Z;
                                M0 77
                                C 473, -40
                                1222, 283
                                1920, 136
                                V 600
                                H 0
                                V 300
                                Z;
                                M0 77
                                C 973, 260
                                1722, -53
                                1920, 120
                                V 600
                                H 0
                                V 300
                                Z;
                                M0 77
                                C 473, 283
                                822, -40
                                1920, 116
                                V 600
                                H 0
                                V 300
                                Z">
                    </animate>
                </path>
            </svg>

            {/* Tech Chips */}
            <TechStack />
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
