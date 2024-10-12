import React, { useRef } from 'react';
import ProjectList from '../assets/ProjectList.json';
import ProjectCard from '../components/ProjectCard';
import './Portfolio.css';
// M-UI
import ImageList from '@mui/material/ImageList';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
// Images
import beach from '../assets/images/beach.png';

export default function Portfolio() {
  const ref = useRef<HTMLUListElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref.current !== null) {
      ref.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="portfolio-background">
      {/* Title */}
      <div className="container portfolio-container">
        <Stack spacing={'.5vh'} alignItems="center" padding={'0% 4%'}>
          <span className="container-title">
            Portfolio&nbsp;
            <BusinessCenterIcon
              style={{
                marginBottom: '-2.5%',
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              }}
            />
          </span>
          <Divider
            orientation="horizontal"
            color="black"
            sx={{ width: '80%', border: 'solid .18vh' }}
          />
          <span className="container-text">side work & passion projects</span>
        </Stack>
      </div>

      {/* Left Arrow */}
      <ArrowBackIosIcon
        className="arrow"
        onClick={() => scroll(-292.5)}
        style={{ left: '1vh', fontSize: '70' }}
      />

      {/* Right Arrow */}
      <ArrowForwardIosIcon
        className="arrow"
        onClick={() => scroll(292.5)}
        style={{ right: '1vh', fontSize: '70' }}
      />

      {/* Scrolling list of Projects */}
      <ImageList cols={1.1} className="wrapper" ref={ref}>
        {ProjectList?.map((project, i) => {
          return (
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              tech={project.tech}
              color={
                project.color as
                  | 'primary'
                  | 'info'
                  | 'success'
                  | 'warning'
                  | 'secondary'
                  | 'error'
              }
              url={project.url}
              className={project.className}
              index={i}
              key={i}
              heroku={project.heroku}
            />
          );
        })}
      </ImageList>

      {/* Background Img */}
      <img src={beach} alt="beach" className="beach" />
    </section>
  );
}
