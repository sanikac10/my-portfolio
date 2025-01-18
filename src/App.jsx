// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProfessionalAcademic from './components/ProfessionalAcademic'
import Projects from './components/Projects'
import AcademicExtracurricular from './components/AcademicExtracurricular'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const arrowRef = useRef(null)

  // Track pointer coords
  useEffect(() => {
    const handleMouse = (e) => {
      setCoords({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Arrow is visible for 1 second, then disappears
  useEffect(() => {
    if (!arrowRef.current) return
    // on mount, arrow is visible
    const timer = setTimeout(() => {
      arrowRef.current.style.opacity = '0'
      arrowRef.current.style.pointerEvents = 'none'
    }, 1000) // 1 second
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <Header />

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
            "Why does my code always look like it’s trying to be a stand-up comedian?"
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
            "If this doesn’t work, I’ll just blame it on cosmic rays again..."
          </span>);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="js-fn">console</span>.
          <span className="js-method">log</span>
          (<span className="string">
            "Fun fact: Adding more comments doesn’t make my code smarter."
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
      <Hero />
      <About />
      <Skills />
      <ProfessionalAcademic />
      <Projects />
      <AcademicExtracurricular />
      <Contact />
      <Footer />

      {/* The arrow => hidden after 1 second */}
      <div className="scroll-arrow" ref={arrowRef}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ display: 'block' }}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </div>
  )
}

export default App
