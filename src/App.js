import React from 'react';
import NavBar from './components/navbar/NavBar';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
// import './App.css';
import './index.css'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
