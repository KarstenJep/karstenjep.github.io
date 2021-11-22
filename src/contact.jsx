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
    
    return (
        <>
        <Header />

        <section className="contactBackground">
            {/* Message Form */}
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
                                // Name Input
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
                                // Email Input
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
                                // Message body
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
                                // Submit Btn
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
