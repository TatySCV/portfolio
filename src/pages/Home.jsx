// Home.jsx
import React from 'react';
import ParticlesBackground from '../components/Particles';

const Home = () => {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <ParticlesBackground /> {/* Componente de partículas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-600 to-black"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-purple-400 animate__animated animate__fadeIn animate__delay-1s">Hola, Soy Tatiana Campos</h1>
        <p className="text-lg md:text-xl mb-2 animate__animated animate__fadeIn animate__delay-2s">Ingeniero Informático</p>
        <p className="text-lg md:text-l mb-8 animate__animated animate__fadeIn animate__delay-2s">Desarrollador apasionado por crear soluciones innovadoras.</p>
        <a href="#projects" className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300 animate__animated animate__fadeIn animate__delay-3s">Ver Proyectos</a>
      </div>
    </section>
  );
};

export default Home;