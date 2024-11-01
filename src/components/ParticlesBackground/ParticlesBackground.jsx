import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import './ParticlesBackground.css'

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
    className="particles-wrapper"
    init={particlesInit}
    options={{
        background: { color: { value: "transparent" }},
        particles: {
            color: { value: "random" },
            links: {
                enable: true,
                color: "random",
                opacity: 0.4,
                distance: 150,
            },
            move: { enable: true, speed: 5, direction: "none", random: true, },
            number: { value: 222 },
            random: false,
            straight: false,
            outMode: "bounce",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            opacity: { value: 0.6, random: true, },
            shape: { type: "image",
              options: {
                  image: {
                      src: "https://e7.pngegg.com/pngimages/183/565/png-clipart-draw-a-stickman-epic-2-stick-figure-computer-icons-stick-miscellaneous-angle.png", // Reemplaza con la ruta de tu imagen
                      width: 20,
                      height: 20
                  }
              } },
            size: { value: 22, random: true },
            modes: {
              repulse: {
                distance: 100, // Distancia de interacción
                duration: 0.4, // Duración del efecto
                speed: 6, // Velocidad de repulsión
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse", // Efecto de repulsión en hover
                },
              },}
        },
    }}
/>
  );
};

export default ParticlesBackground;