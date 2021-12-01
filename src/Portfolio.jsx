import React, {useRef} from 'react';
// M-UI
import ImageList from '@mui/material/ImageList';
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
            <div className="titleDiv"><h3 className="title">Portfolio</h3></div>

            {/* Left Arrow */}
            <button 
                className="arrow" 
                onClick={() => scroll(-400)} 
                style={{ left: '1vh'}}>
                    &#8656;
            </button>

            {/* Right Arrow */}
            <button 
                className="arrow"
                onClick={() => scroll(400)} 
                style={{ right: '1vh'}} >
                    &#8658;
            </button>

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
