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
        background: { color: { value: "transparent" }},
        particles: {
            color: { value: "random" },
            links: {
                enable: true,
                color: "random",
                opacity: 0.4,
                distance: 150,
            },
            move: { enable: true, speed: 3, direction: "random", random: true, },
            number: { value: 222 },
            random: true,
            straight: true,
            outMode: "bounce",
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            opacity: { value: 5, random: true, },
            shape: { type: "image",
              options: {
                  image: {
                      src: fuegos, // Reemplaza con la ruta de tu imagen
                      width: 55,
                      height: 55
                  }
              } },
            size: { value: 66, random: true },
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