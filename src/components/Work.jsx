import React from 'react';
import transition from '../transition';
import { motion } from 'framer-motion';
import './work.css';
const Work = () => {
  return (
    <>
      <div id="home" className="home">
        <div className="mid-text">
          <h2>
            Creating next level <br /> digital products
          </h2>
        </div>
        <div className="mid-menu">
          <div className="left">
            <button style={{ backgroundColor: 'black', color: 'white' }}>
              All
            </button>
            <button>Live</button>
            <button>Development</button>
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
