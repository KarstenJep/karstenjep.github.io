import Header from './header.jsx';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PublishIcon from '@mui/icons-material/Publish';
import './contact.css';

export default function Contact() {
    
    return (
        <>
        <Header />
        <section className="contactBackground">
            <div className="formBackground">
            <form  target="_blank" action="https://formsubmit.co/el/jiyisi" method="POST">
            <input type="hidden" name="_next" value="https://karstenjep.github.io/" />
            <form action="https://formsubmit.co/your-random-string" method="POST" />
            <Grid container spacing={1} pt={1} pb={2}>
                <Grid item xs={12}>
                    <h1 className="sayHi">Say Hi!</h1>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="name" 
                        type="text"
                        label="Name"
                        variant="outlined"
                        color="success"
                        size="small"
                        style={{ width: '90%' }}
                        required />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="email"  
                        type="text"
                        label="Email"
                        variant="outlined"
                        color="success"
                        size="small"
                        style={{ width: '90%' }}
                        required />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="message"
                        label="Message"
                        color="success"
                        multiline 
                        rows={4} 
                        style={{ width: '90%'}} 
                        required />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        type="submit"
                        style={{  fontFamily: 'BioRhyme', width: '70%', color: 'black' }}
                        variant="contained" 
                        color="success"
                        endIcon={<PublishIcon />}
                    >
                        Submit
                    </Button>
                </Grid>
                
            </Grid>
            </form>
            
            </div>

           <div className="chips">
           <Stack spacing={1} alignItems="center" >
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color="primary" />
                <Chip label="success" color="success" />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color="primary" variant="outlined" />
                <Chip label="success" color="success" variant="outlined" />
            </Stack>
            </Stack>

           </div>
         
        </section>
        </>
    )
}
