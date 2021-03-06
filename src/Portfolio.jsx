import React, {useRef} from 'react';
// M-UI
import ImageList from '@mui/material/ImageList';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
// Files
import Projects from './Projects.jsx';
import "./Portfolio.css"
// Images
import beach from "./images/beach.png";
   
export default function Portfolio() {

    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <>
        <section className="portfolioBackground">
            {/* Title */}
            <div className="titleDiv">
                <h3 className="title">
                    Portfolio&nbsp;
                    <BusinessCenterIcon fontSize='large' style={{margin: '0vh 0vh -1vh'}}/> 
                </h3>
            </div>

            {/* Left Arrow */}
            <ArrowBackIosIcon  
                className="arrow"
                onClick={() => scroll(-292.5)} 
                style={{ left: '1vh', fontSize: '70'}} 
            />

            {/* Right Arrow */}
            <ArrowForwardIosIcon
                className="arrow"
                onClick={() => scroll(292.5)} 
                style={{ right: '1vh', fontSize: '70'}} 
            />
                   
            {/* Scrolling list of Projects */}
            <ImageList cols={1.1}
                className="wrapper"
                ref={ref}
            > 
                <Projects /> 
            </ImageList>

            {/* Background Img */}
            <img src={beach} alt="beach" className="beach"/>
        </section>
        </>
    )
}
