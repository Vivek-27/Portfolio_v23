import React, { useEffect, useState } from 'react';
import transition from '../transition';
import { motion } from 'framer-motion';
import portrate from '../images/portrate.png';
import './home.css';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const text = ['Developer', 'FullStack', 'Power'];
  const currTime = new Date().toTimeString();

  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [anim, setAnim] = useState('ease-in-right');

  useEffect(() => {
    if (window.scrollY > 50) {
      console.log(window.scrollY);
      setMenu2(true);
    } else if (window.scrollY < 50) {
      setMenu2(false);
    }
  }, [window.scrollY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentTextIndex < text.length - 1) {
        setCurrentTextIndex(currentTextIndex + 1);
      } else {
        setCurrentTextIndex(0);
      }
    }, 5000);
  }, [currentTextIndex, text.length]);

  return (
    <div id="home" className="home">
      {menu ? (
        <>
          <div className="menu" style={{ animation: `${anim} 0.6s linear` }}>
            <div
              className="menu-close"
              onClick={() => {
                setAnim('ease-out-right');
                setTimeout(() => {
                  setMenu((prev) => !prev);
                  setAnim('ease-in-right');
                }, 500);
              }}
            >
              ※
            </div>
            <div className="navigation-text">Navigation</div>
            <div className="nav-item-menu">
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/work"
              >
                Work
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/about"
              >
                About
              </Link>
              <Link
                onClick={() => setMenu((prev) => !prev)}
                className="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {menu2 ? (
        <>
          <div
            className="menu2"
            onClick={() => {
              setAnim('ease-out-right');
              setTimeout(() => {
                setMenu((prev) => !prev);
                setAnim('ease-in-right');
              }, 500);
            }}
          >
            <div className={menu ? `line line1` : `line`}></div>
            <div className={menu ? `line line2` : `line`}></div>
          </div>
        </>
      ) : (
        ''
      )}
      <div id="page">
        <Parallax strength={200}>
          <Background className="background">
            <img className="animated-image" src={portrate} alt="" />
          </Background>
          <div className="hero">
            <div className="left">
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
          <button>vivekvb@protonmail.com</button>
          <button>+91 8439872415</button>
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
              <a>Awwwwards</a>
              <a>Instagram</a>
              <a>GitHub</a>
              <a>LinkedIn</a>
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
