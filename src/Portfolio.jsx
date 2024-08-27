import React, {useRef} from 'react';
// M-UI
import ImageList from '@mui/material/ImageList';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
// Files
import "./Portfolio.css";
import ProjectList from "./ProjectList.json";
import ProjectCard from "./components/ProjectCard.jsx"
// Images
import beach from "./images/beach.png";
   
export default function Portfolio() {
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };

    return (
        <section className="portfolioBackground">
            {/* Title */}
            <div className="titleDiv">
                <span className="container-title">
                    Portfolio&nbsp;
                    <BusinessCenterIcon fontSize='large' style={{margin: '0vh 0vh -.3vh 0vh '}}/>
                </span>
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
                {ProjectList?.map((project, i) => {
                    return (
                        <ProjectCard
                            image={project.image} 
                            title={project.title} 
                            description={project.description} 
                            tech={project.tech}
                            color={project.color}
                            url={project.url}
                            className={project.className}
                            index={i}
                            key={i}/>
                    )
                })}
            </ImageList>

            {/* Background Img */}
            <img src={beach} alt="beach" className="beach"/>
        </section>
    )
}
