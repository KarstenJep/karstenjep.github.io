import React, { useEffect, useState } from 'react';
import Header from './header.jsx';
import mountains from "./images/mountains.png";
import sun from "./images/sun.png"
import cloud from "./images/clouds.png";
import moon from "./images/moon.png";
import stars from "./images/stars.png";
import birds from "./images/birds.png";
import moose from "./images/moose.png";
import bicycle from "./images/bicycle.png";
import rocket from "./images/rocket.png";
import pg from "./images/pg.png";
import airplane from "./images/airplane.png";
import airBalloon from "./images/air-balloon.png";
import parrot from "./images/parrot.png";
import js from "./images/js.png";
import react from "./images/react.png";
import node from "./images/node.png";
import postgresql from "./images/postgresql.png";
import python from "./images/python.png";
import html from "./images/html.png";
import css from "./images/css.png";
import git from "./images/git.png";
import hs from "./images/hs.png";
import beach from "./images/beach.png";
import wh from "./images/wh.png";
import oel from "./images/oel.png";
import todolist from "./images/todolist.png";
import film from "./images/film.png";
import './home.css';

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => setScrollY(window.scrollY);
    const guest = {
        name: 'Holla'
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>
        <Header />
        <section className="sky">
            {/* <!-- Animation - Sky --> */}
            <img src={mountains} alt="mountains" className="mountains" />
            {/* <div className="guest" style={{ transform: `translateY(-${scrollY * 0.4}vh) translateX(${scrollY * 0.0}vh)`, zIndex: '0'}}>{`Hi ${guest.name}!`}</div> */}
            <img src={sun} alt="sun" className="sun" style={{ transform: `translateY(-${scrollY * 0.1}vh) translateX(-${scrollY * 0.05}vh)`, zIndex: '0'}}/>
            <img src={sun} alt="sun" className="sunTwo" style={{ transform: `translateY(-${scrollY * 0.01}vh) translateX(-${scrollY * 0.005}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudOne" style={{ transform: `translateY(-${scrollY * 0.12}vh) translateX(${scrollY * 0.1}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudTwo" style={{ transform: `translateY(-${scrollY * 0.14}vh) translateX(${scrollY * 0.15}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudThree" style={{ transform: `translateY(-${scrollY * 0.1}vh) translateX(-${scrollY * 0.12}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudFour" style={{ transform: `translateY(-${scrollY * 0.16}vh) translateX(-${scrollY * 0.15}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudFive" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.1}vh)`, zIndex: '0'}}/>
            <img src={cloud} alt="cloud" className="cloudSix" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.16}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudSeven" style={{ transform: `translateY(-${scrollY * 0.04}vh) translateX(${scrollY * 0.065}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudEight" style={{ transform: `translateY(-${scrollY * 0.01}vh) translateX(-${scrollY * 0.07}vh)`}}/>
            <img src={cloud} alt="cloud" className="cloudNine" style={{ transform: `translateY(-${scrollY * 0.01}vh) translateX(${scrollY * 0.04}vh)`}}/>
            <img src={moon} alt="moon" className="moon" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.36}vh)`}}/>
            <img src={stars} alt="stars" className="stars" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.36}vh)`}}/>
            <img src={stars} alt="stars" className="starsTwo" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.36}vh)`}}/>
            {/* <!-- Animation - Animals/vehicles --> */}
            <img src={birds} alt="birds" className="birds" style={{ transform: `translateY(-${scrollY * 0.05}vh) translateX(${scrollY * 0.33}vh)`}}/>
            <img src={moose} alt="moose" className="moose" style={{ transform: `translateX(-${scrollY * 0.05}vh)`}}/>
            <img src={bicycle} alt="bicycle" className="bicycle" style={{ transform: `translateY(${scrollY * 0.015}vh) translateX(${scrollY * 0.15}vh)`}}/>
            <img src={rocket} alt="rocket" className="rocket" style={{ transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.06}vh)`, zIndex: '0'}}/>
            <img src={pg} alt="paraglider" className="pg" style={{ transform: `translateY(${scrollY * 0.05}vh) translateX(-${scrollY * 0.3}vh)`, zIndex: '0'}}/>
            <img src={airplane} alt="airplane" className="airplane" style={{ transform: `translateY(-${scrollY * 0.00}vh) translateX(${scrollY * 0.2}vh)`}}/>
            <img src={airBalloon} alt="airBalloon" className="airBalloon" style={{ transform: `translateY(-${scrollY * 0.02}vh) translateX(${scrollY * 0.0}vh)`}}/>
            <img src={parrot} alt="parrot" className="parrot" style={{ transform: `translateY(-${scrollY * 0.001}vh) translateX(${scrollY * 0.1}vh)`}}/>
            {/* <!-- Animation - Tech --> */}
            <img src={html} alt="html" className="html" style={{ transform: `translateY(${scrollY * 0.02}vh) translateX(-${scrollY * 0.02}vh)`}}/>
            <img src={css} alt="css" className="css" style={{ transform: `translateY(${scrollY * 0.04}vh) translateX(-${scrollY * 0.03}vh)`}}/>
            <img src={js} alt="js" className="javascript" style={{ transform: `translateY(${scrollY * 0.06}vh) translateX(-${scrollY * 0.04}vh)`}}/>
            <img src={react} alt="react" className="react" style={{ transform: `translateY(${scrollY * 0.08}vh) translateX(-${scrollY * 0.05}vh)`}}/>
            <img src={node} alt="node" className="node" style={{ transform: `translateY(${scrollY * 0.08}vh) translateX(${scrollY * 0.05}vh)`}}/>
            <img src={postgresql} alt="postgresql" className="postgresql" style={{ transform: `translateY(${scrollY * 0.06}vh) translateX(${scrollY * 0.04}vh)`}}/>
            <img src={python} alt="python" className="python" style={{ transform: `translateY(${scrollY * 0.04}vh) translateX(${scrollY * 0.03}vh)`}}/>
            <img src={git} alt="git" className="git" style={{ transform: `translateY(${scrollY * 0.02}vh) translateX(${scrollY * 0.02}vh)`}}/>
            {/* <!-- Scroll Down Arrow --> */}
            <div className="section"></div>

            {/* <!-- About Me --> */}
            <div className="info">
                <h3 className="subtitles">Hello!</h3>
                <p className="text">
                    I believe in following life passions and enjoying your work. Practicing this philosophy has led
                    to successful endeavors in the craft brewing industy, health/fitness field, and more recently the tech space. What
                    I enjoy most about software engineering are the daily opportunites to create, collaborate, problem solve, and learn.
                    Let's build a better tomorrow!
                </p>
            </div>
            <img src={hs} alt="me" className="hs" style={{ transform: `translateY(-${scrollY * 0.021}vh) translateX(${scrollY * 0.0}vh)`, zIndex: '0'}}/>
        </section>

        {/* <!-- Projects & Links --> */}
        <section className="projects">
            <img src={beach} alt="beach" className="beach"/>
            <div className="tech">
                <h3 className="subtitles">What's Hop'nin'?</h3>
                <p className="text">A scheduling app made for Big Wood Brewery to help the brewers track hop additions!</p>
                <p className="text"><i>React - Redux - Sagas - Node - Express - Postgresql - Material UI - CSS - Moment.js</i></p> 
                <p className="text"><a href="https://boiling-plains-09195.herokuapp.com/#/home">Check it out!</a>
                    <img src={wh} alt="me" className="wh" style={{width: '10vh'}}/></p>
            </div>
            <div className="tech">
                <h3 className="subtitles">Our Economic Lives</h3>
                <p className="text">Client: St Paul Jack.<br/>
                    A multi-tiered app to help users identify skills and discover potential career paths. Group Project.</p>
                <p className="text"><i>React - Redux - Sagas - Node - Express - CSV - Postgresql - Material UI </i></p>
                <p className="text"><a href="https://safe-plains-34698.herokuapp.com/#/home">Have a look!</a>
                    <img src={oel} alt="oel" className="oel" style={{width: '10vh'}}/></p>
            </div>
            <div className="tech">
                <h3 className="subtitles">To Do List</h3>
                <p className="text">My first full stack app! A to-do list to track tasks.</p>
                <p className="text"><i>jQuery - JavaScript - Ajax - Node - Express - Postgresql - HTML - CSS </i></p>
                <p className="text"><a href="https://dry-shore-54453.herokuapp.com/">Take a gander!</a>
                    <img src={todolist} alt="todolist" className="todo" style={{width: '10vh'}}/></p>
            </div>
            <div className="tech">
                <h3 className="subtitles">Movie Gallery</h3>
                <p className="text">A movie application allowing users to add new movies, and read details!</p>
                <p className="text"><i>React - JavaScript - Redux - Saga - Node - Express - Postgresql - Material UI/CSS </i></p>
                <p className="text"><a href="https://afternoon-falls-30309.herokuapp.com/#/">Open it up!</a>
                    <img src={film} alt="film" className="film" style={{width: '10vh'}}/></p>
            </div>
            {/* <div class="tech">
                <h3 class="subtitles">Photo Gallery</h3>
                <p class="text">A basic photo gallery and fun first project practicing React!</p>
                <p class="text"><i>React - JavaScript - Ajax - Node - Express - CSS </i></p>
                <p class="text"><a href="https://shielded-plateau-72344.herokuapp.com/">Open it up!</a>
                    <img src="images/camera.png" alt="me" id="camera" /></p>
            </div>  */}
        </section>
        </>
    )
}
