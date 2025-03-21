import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';
import Skills from './components/Skills/Skills';
import ThemeButton from './components/ThemeButton/ThemeButton';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ThemeProvider>
        <div className='app-container'>
          <ParticlesBackground />
          {loading ? <LoadingScreen /> :
            <>
              <Header />
              <AboutMe />
              <Skills />
              <Projects />
              <ContactMe />
              <Footer />
              <ThemeButton />
            </>}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App
