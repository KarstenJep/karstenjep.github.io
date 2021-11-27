import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
// Files
import Header from './header.jsx';
import TechStack from './TechStack'
import './contact.css';
import island from "./images/island.png";
import mtn from "./images/mtn.png";


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
                            style={{color: 'lightblue'}}
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
                            style={{  fontFamily: 'BioRhyme', width: '60%', backgroundColor: 'skyblue', color: 'black' }}
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

            <div className="hill"></div>
            <div className="sun"></div>
            <img src={island} alt="island" className="island" />
            <img src={mtn} alt="mountain" className="mtn" />

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
        </>
    )
}
