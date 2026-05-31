import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';
import Skills from './components/Skills/Skills';
import ThemeButton from './components/ThemeButton/ThemeButton';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import './App.css'

function App() {
  return (
    <>
      <ThemeProvider>
        <div className='app-container'>
          <ParticlesBackground />
          <>
            <Header />
            <AboutMe />
            <FeaturedProject />
            <Projects />
            <Skills />
            <ContactMe />
            <Footer />
            <ThemeButton />
          </>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App
