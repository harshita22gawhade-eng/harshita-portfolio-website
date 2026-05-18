import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Contact from './components/Contact/Contact';
const App=()=>{
  return(
    <>
    <Header/>
    <main className='main'>
    <Home />
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Contact/>
    <Footer/>
    <ScrollUp/>
    </main>
    </>
  )
}

export default App;
