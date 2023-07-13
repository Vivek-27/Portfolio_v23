import React, { useEffect, useState } from 'react';
import transition from '../transition';
import { motion } from 'framer-motion';
import portrate from '../images/portrate.png';
import './home.css';
import { Parallax, Background } from 'react-parallax';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Work from './Work';
const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const text = ['Developer', 'FullStack', 'Power'];
  const currTime = new Date().toTimeString();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < text.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        setCurrentTextIndex(0);
      }
    }, 5000);
  }, [currentTextIndex, text.length]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray('#page2>h4').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        }
      });
    });

    gsap.utils.toArray('#page2>p').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, opacity: 0, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              opacity: 1,
              autoAlpha: 1,
              overwrite: 'auto'
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -70, autoAlpha: 0 },
            {
              duration: 1,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto'
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(
            elem,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: 'auto' }
          );
        }
      });
    });
  }, []);

  return (
    <div id="home" className="home">
      <div id="page">
        <Parallax id="parallax" strength={200}>
          <Background className="background">
            <img className="animated-image" src={portrate} alt="" />
          </Background>
          <div className="hero">
            <div id="left" className="left">
              <p>{text[currentTextIndex]}</p>
              <h4>
                Open to <br />
                Work.
              </h4>

              <h1>Vivek</h1>
            </div>
            <div className="right">
              <p>
                FullStack Web <br />
                Developer
              </p>
            </div>
          </div>
        </Parallax>
      </div>

      <div id="page2">
        <h4>
          Hi, I'm Vivek! I'm a Computer Science Engineering Student, experience
          in coding programs and web development. <br /> In-depth knowledge of
          <span> OOPs concept and JAVA Programming. </span> Working experience
          in web development and deployment in JavaScript environment.
        </h4>
        <p>
          Experience in JAVA, HTML, CSS, JavaScript, Linux, Windows, React JS,
          Node JS, Express JS, MongoDB, Adobe Photoshop, etc...
        </p>
      </div>

      <div id="page-work">
        <div className="top">
          <p>RECENT WORK</p>
        </div>
        <div className="projects">
          <Work />
        </div>
      </div>

      <div id="page3">
        <div className="top">
          <h2>
            <img
              className="passport-img"
              src={require('../images/passport.png')}
              alt=""
            />
            Let's work <br />
            together
          </h2>
        </div>
        <div className="mid">
          <button
            onClick={() => {
              window.location = 'mailto:vivekvb@protonmail.com';
            }}
          >
            vivekvb@protonmail.com
          </button>
          <button>
            <a style={{ color: 'white' }} href="tel:+91 8439872415">
              +91 8439872415
            </a>
          </button>
        </div>
        <div className="end">
          <div className="left">
            <div className="ver">
              <p>VERSION</p>
              <span>2023©Edition</span>
            </div>
            <div className="ver">
              <p>LOCAL TIME</p>
              <span>{currTime}</span>
            </div>
          </div>
          <div className="right">
            <p>SOCIALS</p>
            <ul>
              <a href="/">Awwwwards</a>
              <a href="https://www.instagram.com/vivekumar27_/" target="_blank">
                Instagram
              </a>
              <a href="https://github.com/Vivek-27" target="_blank">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-kumar-8b8a0b246/"
                target="_blank"
              >
                LinkedIn
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="motionDiv">
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Home;
