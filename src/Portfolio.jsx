import React, { useState } from 'react';
import "./Portfolio.css"
// Images
import beach from "./images/beach.png";
import wh from "./images/wh.png";
import oel from "./images/oel.png";
import todolist from "./images/todolist.png";
import film from "./images/film.png";
// MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

export default function Portfolio() {
    
    // Declaring state for each project. Toggles rendering description or tech stach
    const [techWH, setTechWH] = useState(false)
    const [techOEL, setTechOEL] = useState(false)
    const [techTD, setTechTD] = useState(false)
    const [techML, setTechML] = useState(false)

    return (
        <>
        <section className="projects">
            {/* What's Hop'nin? */}
            <div className="tech">
                <div className="contents">
                    <img src={wh} alt="me" className="wh"/>
                </div>
                <h3 className="subtitles">What's Hop'nin'?</h3>
                <div className="contents">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio" >
                        <FormControlLabel value="description" control={<Radio color="success" />} label="Description" onChange={() => setTechWH(false)}/>
                        <FormControlLabel value="tech" control={<Radio color="success" />} label="Tech" onChange={() => setTechWH(true)}/>
                    </RadioGroup>
                </div>
                { !techWH ? 
                <p className="text">A scheduling app made for Big Wood Brewery to help the brewers track hop additions!</p>
                :
                <p className="text">[ ReactJs, Redux, Sagas, Node, Express, Postgresql, Material-UI, CSS, Moment.js ]</p>
                }
                < div className="contents">
                    <Button
                        style={{ color: 'black', fontFamily: 'BioRhyme', margin: '2vh auto'}}
                        variant="contained" 
                        color="success"
                        onClick={() => window.location.href="https://boiling-plains-09195.herokuapp.com/#/home"}
                    >
                        Check it out!
                    </Button>
                </div>
            </div>

            {/* OEL */}
            <div className="tech">
                <div className="contents">
                    <img src={oel} alt="oel" className="oel" />
                </div>
                <h3 className="subtitles">Our Economic Lives</h3>
                <div className="contents">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                        <FormControlLabel value="description" control={<Radio />} label="Description" onChange={() => setTechOEL(false)}/>
                        <FormControlLabel value="tech" control={<Radio />} label="Tech" onChange={() => setTechOEL(true)}/>
                    </RadioGroup>
                </div>
                { !techOEL ? 
                <p className="text">A tiered app made for St. Paul Jack to help users discover potential career paths. Group Project.</p>                
                :
                <p className="text">[ ReactJs, Redux, Sagas, Node, Express, CSV, Postgresql, Material-UI ]</p>
                }
                < div className="contents">
                    <Button
                        style={{ color: 'black', fontFamily: 'BioRhyme', margin: '2vh auto'}}
                        variant="contained" 
                        color="primary"
                        onClick={() => window.location.href="https://safe-plains-34698.herokuapp.com/#/home"}
                    >
                        Have a look!
                    </Button>
                </div>
            </div>

            {/* To Do List */}
            <div className="tech">
                <div className="contents">
                    <img src={todolist} alt="todolist" className="todo" />
                </div>
                <h3 className="subtitles">To Do List</h3>
                <div className="contents">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                        <FormControlLabel value="description" control={<Radio color="secondary" />} label="Description" onChange={() => setTechTD(false)}/>
                        <FormControlLabel value="tech" control={<Radio color="secondary" />} label="Tech" onChange={() => setTechTD(true)}/>
                    </RadioGroup>
                </div>
                { !techTD ? 
                <p className="text">My first full stack app! A to-do list to track tasks.</p>
                :
                <p className="text">[ jQuery, JavaScript, Ajax, Node, Express, Postgresql, HTML, CSS ]</p>
                }
                <div className="contents">
                    <Button
                        style={{ color: 'black', fontFamily: 'BioRhyme', margin: '2vh auto'}}
                        variant="contained" 
                        color="secondary"
                        onClick={() => window.location.href="https://dry-shore-54453.herokuapp.com/"}
                    >
                        Take a gander!
                    </Button>
                </div>
            </div>

            {/* Movie Galllery */}
            <div className="tech">
                <div className="contents">
                    <img src={film} alt="film" className="film" />
                </div>
                <h3 className="subtitles">Movie Gallery</h3>
                <div className="contents">
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                        <FormControlLabel value="description" control={<Radio color="error" />} label="Description" onChange={() => setTechML(false)}/>
                        <FormControlLabel value="tech" control={<Radio color="error" />} label="Tech" onChange={() => setTechML(true)}/>
                    </RadioGroup>
                </div>
                { !techML ? 
                <p className="text">A movie application allowing users to add new movies, and read details!</p>
                :
                <p className="text">[ ReactJs, Redux, Saga, Node, Express, Postgresql, Material UI, CSS ]</p>
                }
                <div className="contents">
                    <Button
                        className="button"
                        style={{ color: 'black', fontFamily: 'BioRhyme', margin: '2vh auto'}}
                        variant="contained" 
                        color="error"
                        onClick={() => window.location.href="https://afternoon-falls-30309.herokuapp.com/#/"}
                    >
                        Open it up!
                    </Button>
                </div>
            </div>
            {/* <div class="tech">
                <h3 class="subtitles">Photo Gallery</h3>
                <p class="text">A basic photo gallery and fun first project practicing React!</p>
                <p class="text"><i>React - JavaScript - Ajax - Node - Express - CSS </i></p>
                <p class="text"><a href="https://shielded-plateau-72344.herokuapp.com/">Open it up!</a>
                    <img src="images/camera.png" alt="me" id="camera" /></p>
            </div>  */}
             {/* Background img */}
             <img src={beach} alt="beach" className="beach"/>
        </section>
        </>
    )
}
