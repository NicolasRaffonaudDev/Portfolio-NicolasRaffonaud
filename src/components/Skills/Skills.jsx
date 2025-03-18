import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { skillsData } from '../../data/skillsData';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import './Skills.css';
import SkillCard from '../SkillCard/SkillCard';


const Skills = () => {
  const { theme } = useContext(ThemeContext); // Obtener el tema actual del contexto

  return (
    <section id="skills" className={`skills-section py-5 ${theme === 'dark' ? 'dark' : ''}`}>
      <FadeInWrapper animationClass="fade-in">
        <div className="container">
          <h2 className="text-center display-4 mb-5">Tecnologías</h2>
          <div className="row text-center">
            {skillsData.map((skill) => (
              <SkillCard
                key={skill.name}
                {...skill}
              />
            ))}
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Skills;