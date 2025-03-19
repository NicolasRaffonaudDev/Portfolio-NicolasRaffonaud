import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { skillsData } from '../../data/skillsData';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import SkillCard from '../SkillCard/SkillCard';
import './Skills.css';


const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="skills" className={`skills-section py-5 ${theme === 'dark' ? 'dark' : ''}`}>
      <FadeInWrapper animationClass="fade-in">
        <div className="container">
          <h2 className="display-4 mb-5">Tecnologías</h2>
          <div className="row text-center row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {skillsData.map((skill) => (
              <div key={skill.name} className='col'>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Skills;