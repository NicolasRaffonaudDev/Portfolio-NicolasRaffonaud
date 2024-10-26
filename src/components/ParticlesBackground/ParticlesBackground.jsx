import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Cambia el color de fondo según tu tema
          },
        },
        particles: {
          color: {
            value: "#a0a0a0",
          },
          links: {
            enable: true,
            color: "#ffffff",
            opacity: 0.5,
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 80,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
            random: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;