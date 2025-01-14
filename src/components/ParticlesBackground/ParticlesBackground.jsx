import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import './ParticlesBackground.css'
import fuegos from '../../assets/geometryy-rem.png'

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="particles-wrapper"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          color: { value: "#4D4D4D" },
          links: {
            enable: true,
            color: "#555555",
            opacity: 0.1,
            distance: 100,
          },
          move: { enable: true, speed: 1, random: true, outMode: "bounce" },
          number: { value: 77 },
          opacity: { value: 0.2 },
          shape: {
            type: "image",
            options: {
              image: {
                src: fuegos, // RUTA DE IMAGEN DINAMICA
                width: 55,
                height: 55,
              }
            }
          },
          size: { value: { min: 22, max: 55 }, random: true }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // EFECTO DE HOVER
            },
          },
          modes: {
            grab: {
              distance: 555,
              line_linked: {
                opacity: 0.6, // OPACIDAD DE LINEAS
                color: "#ff5722", // COLOR DE LINEAS
                width: 2, // GROSOR DE LINEAS
                shadow: {
                  enable: true,
                  color: "#ff5722",
                  blur: 5 // Efecto de desenfoque para la sombra
                }
              }
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;