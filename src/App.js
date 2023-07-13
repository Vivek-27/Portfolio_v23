import { Routes, Route, useLocation } from 'react-router';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import MenuBtn from './components/MenuBtn';

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greeding = [
    '',
    '',
    '',
    '',
    '',
    ' • Hola',
    ' • Bonjour',
    ' • Hello',
    ' • Hola',
    ' • नमस्ते',
    ' • Olá',
    ' • Hallo',
    ' • Χαίρετε'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreetingIndex((prevIndex) => prevIndex + 1);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [greetingIndex]);
  useEffect(() => {
    if (greetingIndex >= greeding.length) {
      setLoading(false);
    }
  }, [greetingIndex]);

  return (
    <>
      {loading ? (
        <>
          <div id="loading">
            {' '}
            <h4>{greeding[greetingIndex]}</h4>
          </div>
        </>
      ) : (
        <div className="App">
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route index element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
      <div className="App">
        <NavBar />
        <MenuBtn />
        <ParallaxProvider>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route index element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
