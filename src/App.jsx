// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProfessionalAcademic from './components/ProfessionalAcademic';
import AcademicExtracurricular from './components/AcademicExtracurricular';
import Footer from './components/Footer';
import WallOfLove from './components/WallOfLove';
// import Contact from './components/Contact' // REMOVED from usage

import './App.css';

function App() {
  // For pointer bubble
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`App ${scrolled ? 'app-scrolled' : ''}`}>
      <Header scrolled={scrolled} />
      <Hero scrolled={scrolled} />
      <div id="top" style={{ position: 'absolute', top: 0 }}></div>

      {/* Comedic snippet on the right side */}
      <div className="bg-code-snippet">
        <pre>
          <span className="tag-color">&lt;html&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="tag-color">&lt;head&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag-color">&lt;title&gt;</span>
          My Hilarious Code
          <span className="tag-color">&lt;/title&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="tag-color">&lt;/head&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="tag-color">&lt;body&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag-color">&lt;script&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">"Hello from comedic snippet!"</span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">
            // Maybe I should stop tinkering with VSCode themes...
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "Why does my code always look like it's trying to be a stand-up comedian?"
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "Debugging: Where you're the detective, the culprit, and the victim."
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "If this doesn't work, I'll just blame it on cosmic rays again..."
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "Fun fact: Adding more comments doesn't make my code smarter."
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "My code ran fine until I touched it. Typical."
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="tag-color">&lt;/script&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">
            &lt;!-- I'm 90% sure this HTML file has a sense of humor. --&gt;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">
            &lt;!-- If you're reading this in the future: I swear I had good intentions. --&gt;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">
            &lt;!-- Warning: This document may contain traces of procrastination. --&gt;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment">
            &lt;!-- &lt;blink&gt; tags are the forbidden fruit of the HTML world. --&gt;
          </span>
          <br />
          &nbsp;&nbsp;<span className="tag-color">&lt;/body&gt;</span>
          <br />
          <span className="tag-color">&lt;/html&gt;</span>
        </pre>
      </div>

      {/* Big radial highlight behind pointer */}
      <div
        className="pointer-bubble"
        style={{
          left: coords.x,
          top: coords.y,
        }}
      />

      {/* Normal flow for all sections */}
      <div className={`main-content ${scrolled ? 'main-content-visible' : ''}`}>
        <About />
        <ProfessionalAcademic />
        <Projects />
        <AcademicExtracurricular />
        <WallOfLove />
        <Footer />
      </div>
    </div>
  );
}

export default App;
