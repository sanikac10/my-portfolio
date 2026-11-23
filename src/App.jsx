// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import ProfessionalAcademic from './components/ProfessionalAcademic';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div id="top" style={{ position: 'absolute', top: 0 }}></div>

      <div className="main-content">
        <Research />
        <About />
        <ProfessionalAcademic />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
