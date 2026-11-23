// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import ProfessionalAcademic from './components/ProfessionalAcademic';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AIMode from './components/AIMode';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AIMode />
      <div id="top" style={{ position: 'absolute', top: 0 }}></div>

      <div className="main-content">
        <Research />
        <ProfessionalAcademic />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
