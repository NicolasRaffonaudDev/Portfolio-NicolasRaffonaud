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
          number: { value: 44 },
          opacity: { value: 0.2 },
          shape: {
            type: "image",
            options: {
              image: {
                src: fuegos, // Utiliza la ruta de tu imagen local
                width: 55,
                height: 55,
              }
            }
          },
          size: { value: { min: 14, max: 44 }, random: true }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Efecto de repulsión en hover
            },
          },
          modes: {
            grab: {
              distance: 222,
              line_linked: {
                opacity: 0.6, // Opacidad completa para líneas en hover
                color: "#ff5722", // Cambia a un color de resaltado (puedes ajustar)
                width: 2, // Grosor en el modo hover
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