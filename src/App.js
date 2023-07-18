import React from 'react';
import WOW from 'wowjs';
import NavBar from './components/navbar/NavBar';
// import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
