import React from 'react';
// M-UI
import ImageList from '@mui/material/ImageList';
// Files
import Projects from './Projects.jsx';
import "./Portfolio.css"
// Images
import beach from "./images/beach.png";
import leftArrow from "./images/leftarrow.png";
import rightArrow from "./images/rightArrow.png";


   
export default function Portfolio() {

    return (
        <>
        <section className="portfolioBackground">

            {/* Left Arrow */}
            <img src={leftArrow} alt="left arrow" className="arrow" style={{ left: '1vh'}}/>

            {/* Scrolling list of Projects */}
            <ImageList cols={1.1}
                className="wrapper"
            > 
                <Projects /> 
            </ImageList>

            {/* Right Arrow */}
            <img src={rightArrow} alt="right arrow" className="arrow" style={{ right: '1vh'}}/>

            {/* Background Img */}
            <img src={beach} alt="beach" className="beach"/>
        </section>
        </>
    )
}
