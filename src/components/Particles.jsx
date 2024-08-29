// ParticlesBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
            type: 'circle'
          },
          size: {
            value: 5,
            random: true
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#6326A2',
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out'
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          }
        }
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default ParticlesBackground;