import React, { useState } from 'react';
import "./ProjectCard.css"
// MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Divider from '@mui/material/Divider';
import LaunchIcon from '@mui/icons-material/Launch';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default function ProjectCard({ image, title, description, tech, color, url, className, index}) {
    
    const [toggleContent, setToggleContent] = useState(false);

    return (
        <div className="card-container">
            <Stack 
                spacing={'2vh'} 
                alignItems="center" 
                padding={'14% 8% 14%'}
                >
                <img src={image} alt="project logo" className={className}/>
                <h3 className="subtitles">{title}</h3>
                <RadioGroup 
                    row aria-label="gender" 
                    defaultValue="description" 
                    className="radio"
                    >
                    <FormControlLabel 
                        value="description" 
                        control={<Radio color={color} />} 
                        label={<span style={{ fontSize: '2vh' }}>Description</span>}
                        onChange={() => setToggleContent(false)}
                        />
                    <FormControlLabel 
                        value="tech" 
                        control={<Radio color={color} />} 
                        label={<span style={{ fontSize: '2vh' }}>Tech</span>}
                        onChange={() => setToggleContent(true)}
                        />
                </RadioGroup>
                <Divider 
                    orientation="horizontal" 
                    color="black" 
                    sx={{ width: '80%', border: 'solid .2vh'}}
                    />
                <Box 
                    sx={{ textAlign: 'center', fontSize: '2.2vh', height: '14vh'}}
                    px={'1vw'}
                    >
                    { !toggleContent ? 
                        description   
                    :
                        tech.map(( item, i) => {
                            return (
                            <Chip 
                                label={item}
                                color={color}
                                sx={{ marginX: .5, marginBottom: 1, fontSize: '1.6vh', fontWeight: 'bold'}}
                                variant={"outlined"}
                                key={i}/>
                        )})
                    }
                </Box>
                <Button
                    style={{ fontFamily: 'BioRhyme', width: '50%', fontSize: 'medium', borderRadius: '20px'}}
                    variant="contained"
                    color={color}
                    onClick={() => window.open(`${url}`, '_blank')}
                    endIcon={index % 2 === 0 ? <RocketLaunchIcon /> : <LaunchIcon />}
                >
                    Demo
                </Button>
            </Stack>
        </div>
    )
}
