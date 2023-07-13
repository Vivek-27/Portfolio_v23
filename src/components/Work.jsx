import React, { useEffect, useState } from 'react';
import transition from '../transition';
import { motion } from 'framer-motion';
import './work.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const Work = () => {
  const btnClicked = { backgroundColor: 'black', color: 'white' };
  const [allBtnStyle, setAllBtnStyle] = useState({
    backgroundColor: 'black',
    color: 'white'
  });
  const [liveBtnStyle, setLiveBtnStyle] = useState({});
  const [devBtnStyle, setDevBtnStyle] = useState({});

  const btnStyleChange = (e) => {
    if (e === 'all') {
      setAllBtnStyle(btnClicked);
      setDevBtnStyle({});
      setLiveBtnStyle({});
    } else if (e === 'live') {
      setLiveBtnStyle(btnClicked);
      setAllBtnStyle({});
      setDevBtnStyle({});
    } else if (e === 'dev') {
      setDevBtnStyle(btnClicked);
      setAllBtnStyle({});
      setLiveBtnStyle({});
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray('.project1>.left>.img-p1').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 70, autoAlpha: 0 },
            {
              duration: 0.5,
              opacity: 1,
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
            { y: 70, autoAlpha: 0 },
            {
              duration: 0.5,
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
    gsap.utils.toArray('.project1>.left>.img-p2').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: 0, autoAlpha: 0 },
            {
              duration: 1.5,
              x: -120,
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
            { x: 0, autoAlpha: 0 },
            {
              duration: 1.5,
              x: -120,
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
    gsap.utils.toArray('.project1>.left>.img-p3').forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 85%',
        end: 'bottom 20%',
        onEnter: function () {
          gsap.fromTo(
            elem,
            { x: 30, autoAlpha: 0 },
            {
              duration: 2,
              x: 120,
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
            { x: 30, autoAlpha: 0 },
            {
              duration: 2,
              x: 120,
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
  }, []);

  return (
    <>
      <div id="home" className="home">
        <div className="mid-text">
          <h2>Creating next level digital products</h2>
        </div>
        <div className="mid-menu">
          <div className="left">
            <button onClick={() => btnStyleChange('all')} style={allBtnStyle}>
              All
            </button>
            <button onClick={() => btnStyleChange('live')} style={liveBtnStyle}>
              Live
            </button>
            <button onClick={() => btnStyleChange('dev')} style={devBtnStyle}>
              Development
            </button>
          </div>
          <div className="right">
            <div className="list-view circle">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="grid-view circle">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project1 item">
            <div className="left-text">
              <h5>Instagram Clone</h5>
              <p>
                In this project, I have build Instagram Clone using React Js (as
                front-end) and Node Js (as back-end), which includes creating a
                posting page where users can scroll and see the posted images.
              </p>
              <span>
                Key Features —{' '}
                <ul>
                  <li>Sign Up and Login</li>
                  <li>Post Images</li>
                  <li>Like post</li>
                  <li>Comment on post</li>
                  <li>Edit Profile</li>
                </ul>
              </span>
            </div>
            <div className="left">
              <img
                className="img-p2"
                src={require('../images/project_instagram2.png')}
                alt=""
              />

              <img
                className="img-p3"
                src={require('../images/project_instagram3.png')}
                alt=""
              />
              <img
                className="img-p1"
                src={require('../images/project_instagram.png')}
                alt=""
              />
            </div>
          </div>
        </div>
        <h1>Work</h1>
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
    </>
  );
};

export default Work;
