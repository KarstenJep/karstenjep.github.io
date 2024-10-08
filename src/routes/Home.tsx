import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Portfolio from './Portfolio';
import './Home.css';
// Images
import mountains from '../assets/images/mountains.png';
import sun from '../assets/images/sun.png';
// import cloudss from "../assets/images/clouds.png";
import cloudss from '../assets/images/cloudss.png';
import crescent from '../assets/images/crescent.png';
import stars from '../assets/images/stars.png';
import birds from '../assets/images/birds.png';
import moose from '../assets/images/moose.png';
import bicycle from '../assets/images/bicycle.png';
import rocket from '../assets/images/rocket.png';
import pg from '../assets/images/pg.png';
import airplane from '../assets/images/airplane.png';
import airBalloon from '../assets/images/air-balloon.png';
import parrot from '../assets/images/parrot.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import node from '../assets/images/node.png';
import postgresql from '../assets/images/postgresql.png';
import python from '../assets/images/python.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import git from '../assets/images/git.png';
import spring from '../assets/images/spring.png';
import mui from '../assets/images/mui.svg';
import sql from '../assets/images/sql.png';
import redux from '../assets/images/redux.svg';
import typescript from '../assets/images/typescript.png';
import java from '../assets/images/java.png';

export default function Home() {
  // TODO: add loading screen until images/animations have loaded 100%
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="sky">
        {/* <!-- Animation - Sky --> */}
        <img src={mountains} alt="mountains" className="mountains" />
        <div
          className="username"
          style={{
            transform: `translateY(-${scrollY * 0.4}vh) translateX(${scrollY * 0.0}vh)`,
            zIndex: '2',
          }}
        >{`Come On In!`}</div>
        <img
          src={sun}
          alt="sun"
          className="sun"
          style={{
            transform: `translateY(-${scrollY * 0.1}vh) translateX(-${scrollY * 0.05}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={sun}
          alt="sun"
          className="sunTwo"
          style={{
            transform: `translateY(-${scrollY * 0.01}vh) translateX(-${scrollY * 0.005}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud1"
          style={{
            transform: `translateY(-${scrollY * 0.12}vh) translateX(${scrollY * 0.1}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud2"
          style={{
            transform: `translateY(-${scrollY * 0.14}vh) translateX(${scrollY * 0.15}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud3"
          style={{
            transform: `translateY(-${scrollY * 0.1}vh) translateX(-${scrollY * 0.12}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud4"
          style={{
            transform: `translateY(-${scrollY * 0.16}vh) translateX(-${scrollY * 0.15}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud5"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.1}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud6"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.16}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud7"
          style={{
            transform: `translateY(-${scrollY * 0.02}vh) translateX(${scrollY * 0.09}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud8"
          style={{
            transform: `translateY(-${scrollY * 0.02}vh) translateX(${scrollY * 0.08}vh)`,
          }}
        />
        <img
          src={cloudss}
          alt="cloud"
          className="cloud9"
          style={{
            transform: `translateY(-${scrollY * 0.02}vh) translateX(${scrollY * 0.07}vh)`,
          }}
        />
        <img
          src={crescent}
          alt="crescent"
          className="crescent"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.36}vh)`,
          }}
        />
        <img
          src={stars}
          alt="stars"
          className="stars"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(-${scrollY * 0.36}vh)`,
          }}
        />
        <img
          src={stars}
          alt="stars"
          className="starsTwo"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.36}vh)`,
          }}
        />
        {/* <!-- Animation - Animals/vehicles --> */}
        <img
          src={birds}
          alt="birds"
          className="birds"
          style={{
            transform: `translateY(-${scrollY * 0.07}vh) translateX(${scrollY * 0.4}vh)`,
          }}
        />
        <img
          src={moose}
          alt="moose"
          className="moose"
          style={{ transform: `translateX(-${scrollY * 0.05}vh)` }}
        />
        <img
          src={bicycle}
          alt="bicycle"
          className="bicycle"
          style={{
            transform: `translateY(${scrollY * 0.015}vh) translateX(${scrollY * 0.15}vh)`,
          }}
        />
        <img
          src={rocket}
          alt="rocket"
          className="rocket"
          style={{
            transform: `translateY(-${scrollY * 0.2}vh) translateX(${scrollY * 0.06}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={pg}
          alt="paraglider"
          className="pg"
          style={{
            transform: `translateY(${scrollY * 0.08}vh) translateX(-${scrollY * 0.4}vh)`,
            zIndex: '0',
          }}
        />
        <img
          src={pg}
          alt="paraglider"
          className="pg2"
          style={{
            transform: `translateY(${scrollY * 0.015}vh) translateX(-${scrollY * 0.2}vh)`,
            zIndex: '1',
          }}
        />
        <img
          src={airplane}
          alt="airplane"
          className="airplane"
          style={{
            transform: `translateY(-${scrollY * 0.0}vh) translateX(${scrollY * 0.35}vh)`,
          }}
        />
        <img
          src={airBalloon}
          alt="airBalloon"
          className="airBalloon"
          style={{
            transform: `translateY(-${scrollY * 0.03}vh) translateX(${scrollY * 0.0}vh)`,
          }}
        />
        <img
          src={parrot}
          alt="parrot"
          className="parrot"
          style={{
            transform: `translateY(-${scrollY * 0.001}vh) translateX(${scrollY * 0.1}vh)`,
          }}
        />
        {/* <!-- Animation - Tech --> */}
        <img
          src={html}
          alt="html"
          className="html"
          style={{
            transform: `translateY(${scrollY * 0.02}vh) translateX(-${scrollY * 0.02}vh)`,
          }}
        />
        <img
          src={css}
          alt="css"
          className="css"
          style={{
            transform: `translateY(${scrollY * 0.04}vh) translateX(-${scrollY * 0.03}vh)`,
          }}
        />
        <img
          src={js}
          alt="js"
          className="javascript"
          style={{
            transform: `translateY(${scrollY * 0.06}vh) translateX(-${scrollY * 0.04}vh)`,
          }}
        />
        <img
          src={typescript}
          alt="typescript"
          className="typescript"
          style={{
            transform: `translateY(${scrollY * 0.08}vh) translateX(-${scrollY * 0.05}vh)`,
          }}
        />
        <img
          src={java}
          alt="java"
          className="java"
          style={{
            transform: `translateY(${scrollY * 0.08}vh) translateX(${scrollY * 0.05}vh)`,
          }}
        />
        <img
          src={python}
          alt="python"
          className="python"
          style={{
            transform: `translateY(${scrollY * 0.06}vh) translateX(${scrollY * 0.04}vh)`,
          }}
        />
        <img
          src={sql}
          alt="sql"
          className="sql"
          style={{
            transform: `translateY(${scrollY * 0.04}vh) translateX(${scrollY * 0.03}vh)`,
          }}
        />
        <img
          src={git}
          alt="git"
          className="git"
          style={{
            transform: `translateY(${scrollY * 0.02}vh) translateX(${scrollY * 0.02}vh)`,
          }}
        />
        <img
          src={mui}
          alt="mui"
          className="mui"
          style={{
            transform: `translateY(${scrollY * 0.03}vh) translateX(-${scrollY * 0.01}vh)`,
          }}
        />
        <img
          src={redux}
          alt="redux"
          className="redux"
          style={{
            transform: `translateY(${scrollY * 0.05}vh) translateX(-${scrollY * 0.02}vh)`,
          }}
        />
        <img
          src={react}
          alt="react"
          className="react"
          style={{
            transform: `translateY(${scrollY * 0.07}vh) translateX(-${scrollY * 0.03}vh)`,
          }}
        />
        <img
          src={node}
          alt="node"
          className="node"
          style={{
            transform: `translateY(${scrollY * 0.07}vh) translateX(${scrollY * 0.03}vh)`,
          }}
        />
        <img
          src={spring}
          alt="spring"
          className="spring"
          style={{
            transform: `translateY(${scrollY * 0.05}vh) translateX(${scrollY * 0.02}vh)`,
          }}
        />
        <img
          src={postgresql}
          alt="postgresql"
          className="postgresql"
          style={{
            transform: `translateY(${scrollY * 0.03}vh) translateX(${scrollY * 0.01}vh)`,
          }}
        />
        {/* <!-- Scroll Down Arrow --> */}
        <Link
          className="section"
          to="portfolio"
          offset={2800}
          spy={true}
          smooth={true}
          duration={10000}
        ></Link>

        <div id="portfolio"></div>
      </section>

      {/* <!-- Projects & Links --> */}
      <Portfolio />
    </>
  );
}
