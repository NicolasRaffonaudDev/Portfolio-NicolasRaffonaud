import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import './ParticlesBackground.css'
import fuegos from '../../assets/fuegos-artificiales.png'

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
          color: { value: "#000" },
          links: {
              enable: true,
              color: "#2617fa",
              opacity: 0.8,
              distance: 100,
          },
          move: { enable: true, speed: 3, random: false, outMode: "bounce" },
          number: { value: 99 },
          opacity: { value: 0.8 },
          shape: {
            type: "image",
            options: {
              image: {
                src: fuegos, // Utiliza la ruta de tu imagen local
                width: 55,
                height: 55
              }
            }
          },
          size: { value: { min: 33, max: 77 }, random: true }
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
              distance: 155,
              line_linked: { opacity: 0.8 }
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;