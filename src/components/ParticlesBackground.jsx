import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          color: { value: "#FFC0CB" },
          move: { speed: 1 },
        },
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
};

export default ParticlesBackground;
