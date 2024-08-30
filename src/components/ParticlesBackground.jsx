// ParticlesBackground.jsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import FaReact from "../assets/svg/FaReact.svg";
import FaAndroid from "../assets/svg/FaAndroid.svg";

const ParticlesBackground = ({ className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Lista de URLs de SVG
  const svgImages = [
    { src: FaReact, width: 40, height: 40 },
    { src: FaAndroid, width: 40, height: 40 },
  ];

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    style: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    detectRetina: false,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6,
          speed: 3,
        },
      },
    },
    particles: {
      color: {
        value: "random",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      links: {
        color: "random", // Color de las líneas de conexión
        distance: 250, // Distancia a la que se conectan las partículas
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      lineLinked: {
        blink: false,
        color: "random",
        consent: false,
        distance: 30,
        enable: true,
        opacity: 0.3,
        width: 0.5,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 2000,
        },
        limit: 0,
        value: 200,
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0.05,
          speed: 2,
          sync: false,
        },
        random: false,
      },
      shape: {
        type: "circle",
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: true,
        value: {min:0.2, max:1},
      },
    },
  }));

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className={className} // Asegúrate de que las partículas ocupen solo el área del contenedor padre
      />
    );
  }

  return null;
};

export default ParticlesBackground;
