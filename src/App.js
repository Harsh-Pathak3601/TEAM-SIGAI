import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Faculty from './components/Faculty';
import CoreTeam from './components/CoreTeam';
import JuniorTeam from './components/JuniorTeam';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Faculty/>
      <CoreTeam />
      <JuniorTeam />
      <Footer />
    </div>
  );
}

export default App;
