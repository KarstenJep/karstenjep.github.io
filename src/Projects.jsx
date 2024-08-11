import React, { useState } from 'react';
import "./Projects.css"
// Images
import quotation from "./images/quotation.png";
import wh from "./images/wh.png";
import oel from "./images/oel.png";
import search from "./images/search.png";
import film from "./images/film.png";
import camera from "./images/camera.png";
import mario from "./images/mario.png";
import todolist from "./images/todolist.png";
// MUI
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

export default function Portfolio() {
    
    // Declaring state for each project. Toggles rendering description or tech stach
    const [techQuotes, setTechQuotes] = useState(false);
    const [techWH, setTechWH] = useState(false);
    const [techOEL, setTechOEL] = useState(false);
    const [techDF, setTechDF] = useState(false);
    const [techMG, setTechMG] = useState(false);
    const [techPG, setTechPG] = useState(false);
    const [techTD, setTechTD] = useState(false);
    const [techMA, setTechMA] = useState(false);

    return (
        <>
        {/* Quote Game */}
        <div className="tech">
            <div className="contents">
                <img src={quotation} className="quotation"/>
            </div>
            <h3 className="subtitles">Quote Game</h3>
            <div className="contents">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio" >
                    <FormControlLabel value="description" control={<Radio color="warning" />} label="Description" onChange={() => setTechQuotes(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="warning" />} label="Tech" onChange={() => setTechQuotes(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techQuotes ? 
                    <p>A Test your knowledge in a fun and challenging game where you guess who said the famous quote!</p>          
                :
                    <p>[ ReactJs, External API's, Material-UI, CSS ]</p>
                }
            </div>
            < div className="contents">
                <Button
                    style={{ color: 'warning', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained"
                    color="warning"
                    onClick={() => window.open('https://karstenjep.github.io/quote-generator-api/', '_blank')}
                >
                    Click Here!
                </Button>
            </div>
        </div>

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
            <div className="textBox">
                { !techWH ? 
                    <p>A scheduling app made for Big Wood Brewery to help the brewers track hop additions!</p>          
                :
                    <p>[ ReactJs, Redux, Sagas, Node, Express, Postgresql, Material-UI, CSS, Moment.js ]</p>
                }
            </div>
            < div className="contents">
                <Button
                    style={{ color: 'success', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained"
                    color="success"
                    onClick={() => window.open('https://boiling-plains-09195.herokuapp.com/#/home', '_blank')}
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
            <div className="textBox">
                { !techOEL ? 
                    <p>A tiered app made for St. Paul Jack to help users discover potential career paths. Group Project.</p>          
                :
                    <p>[ ReactJs, Redux, Sagas, Node, Express, CSV, Postgresql, Material-UI ]</p>
                }
            </div>
            < div className="contents">
                <Button
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="primary"
                    onClick={() => window.open('"https://safe-plains-34698.herokuapp.com/#/home', '_blank')}
                >
                    Have a look!
                </Button>
            </div>
        </div>

        {/* Data Finder */}
        <div className="tech">
            <div className="contents">
                <img src={search} alt="search" className="search" />
            </div>
            <h3 className="subtitles">Data Finder</h3>
            <div className="contents">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                    <FormControlLabel value="description" control={<Radio color="secondary" />} label="Description" onChange={() => setTechDF(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="secondary" />} label="Tech" onChange={() => setTechDF(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techDF ? 
                    <p>An API data finder allowing users to search through U.S. schools and districts</p>          
                :
                    <p>[ ReactTS, Vite, Chakra-UI, API, Pretty Resolver ]</p>
                }
            </div>
            <div className="contents">
                <Button
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="secondary"
                    onClick={() => window.open('https://karstenjep.github.io/react-interview-exercise/', '_blank')}
                >
                    Take a gander!
                </Button>
            </div>
        </div>

         {/* Mario */}
         <div className="tech">
            <div className="contents">
                <img src={mario} alt="mario" className="mario" />
            </div>
            <h3 className="subtitles">Mario</h3>
            <div className="contents">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                    <FormControlLabel value="description" control={<Radio color="error" />} label="Description" onChange={() => setTechMA(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="error" />} label="Tech" onChange={() => setTechMA(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techMA ? 
                    <p>An old school Mario game with 3 levels, built with Kaboom.JS. Press space to jump!</p>          
                :
                    <p>[ Kaboom.JS, HTML ]</p>
                }
            </div>
            <div className="contents">
                <Button
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="error"
                    onClick={() => window.open('https://karstenjep.github.io/Mario-Kaboom.js/', '_blank')}
                >
                    Game on!
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
                    <FormControlLabel value="description" control={<Radio color="warning" />} label="Description" onChange={() => setTechMG(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="warning" />} label="Tech" onChange={() => setTechMG(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techMG ? 
                    <p>A movie application allowing users to add new movies, and read details!</p>          
                :
                    <p>[ ReactJs, Redux, Saga, Node, Express, Postgresql, Material UI, CSS ]</p>
                }
            </div>
            <div className="contents">
                <Button
                    className="button"
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="warning"
                    onClick={() => window.open('https://afternoon-falls-30309.herokuapp.com/#/', '_blank')}
                >
                    Open it up!
                </Button>
            </div>
        </div>

        {/* Photo Galllery */}
        <div className="tech">
            <div className="contents">
                <img src={camera} alt="camera" className="camera" />
            </div>
            <h3 className="subtitles">Photo Gallery</h3>
            <div className="contents">
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="description" className="radio">
                    <FormControlLabel value="description" control={<Radio color="success" />} label="Description" onChange={() => setTechPG(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="success" />} label="Tech" onChange={() => setTechPG(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techPG ? 
                    <p>A small photo gallery of my life, and my first website in React!</p>          
                :
                    <p>[ ReactJs, Ajax, Node, Express, CSS ]</p>
                }
            </div>
            <div className="contents">
                <Button
                    className="button"
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="success"
                    onClick={() => window.open('https://shielded-plateau-72344.herokuapp.com/', '_blank')}
                >
                    Another one!
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
                    <FormControlLabel value="description" control={<Radio color="info" />} label="Description" onChange={() => setTechTD(false)}/>
                    <FormControlLabel value="tech" control={<Radio color="info" />} label="Tech" onChange={() => setTechTD(true)}/>
                </RadioGroup>
            </div>
            <div className="textBox">
                { !techTD ? 
                    <p>My first full stack app! A to-do list to track tasks.</p>          
                :
                    <p>[ jQuery, JavaScript, Ajax, Node, Express, Postgresql, HTML, CSS ]</p>
                }
            </div>
            <div className="contents">
                <Button
                    style={{ color: 'black', fontFamily: 'BioRhyme', width: '50%', margin: 'auto'}}
                    variant="contained" 
                    color="info"
                    onClick={() => window.open('https://dry-shore-54453.herokuapp.com/', '_blank')}
                >
                    Click here!
                </Button>
            </div>
        </div>
        </>
    )
}
