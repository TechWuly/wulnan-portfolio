import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
import Hero from './components/Home/Hero.js';
import Skills from './components/Home/Skills.js';
import Projects from './components/Projects/Projects.js';
import Experience from './components/Experience/Experience.js';
import Certificate from './components/Certificate/Certificate.js';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Certificate />
              </>
            } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificate" element={<Certificate />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;