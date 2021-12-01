import React, {useRef} from 'react';
// M-UI
import ImageList from '@mui/material/ImageList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
// Files
import Projects from './Projects.jsx';
import "./Portfolio.css"
// Images
import beach from "./images/beach.png";
import portfolioIcon from "./images/portfolio.png";
   
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
                    <img src={portfolioIcon} alt='icon' style={{width: '4.5vh', margin: '0vh 0vh -1vh'}}/>
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
