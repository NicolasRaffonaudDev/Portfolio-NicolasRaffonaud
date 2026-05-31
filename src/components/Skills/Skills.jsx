import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import FadeInWrapper from '../FadeInWrapper/FadeInWrapper';
import { skillGroups } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="skills" className={`skills-section py-5 ${theme === 'dark' ? 'dark' : ''}`}>
      <FadeInWrapper animationClass="fade-in">
        <div className="container">
          <h2 className="text-center display-4 mb-3">Tecnologias</h2>
          <p className="skills-intro text-center mx-auto mb-5">
            Stack y herramientas con las que construyo interfaces, APIs, despliegues y flujos de desarrollo reales.
          </p>

          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group mb-5">
              <div className="skill-group-header">
                <h3>{group.title}</h3>
              </div>
              <div className="row text-center">
                {group.items.map((skill) => (
                  <div key={skill.name} className="col-sm-6 col-md-4 col-xl-3 mb-4">
                    <div className="skill-card h-100">
                      <div className="skill-icon" style={{ '--icon-color': skill.icon.props?.style?.color || '#0d6efd' }}>
                        {skill.icon}
                      </div>
                      <h5 className="skill-name">{skill.name}</h5>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInWrapper>
    </section>
  );
};

export default Skills;
