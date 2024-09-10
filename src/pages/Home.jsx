import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-8 md:px-12"
      style={{ minHeight: 'calc(100vh - 150px)' }} // Ajuste adicional en altura si es necesario
    >
      <ParticlesBackground className="absolute inset-0 z-10" />

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-600 to-black"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-purple-400 animate__animated animate__fadeIn animate__delay-1s">
            Hola, Soy Tatiana Campos
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-2 animate__animated animate__fadeIn animate__delay-2s">
            Ingeniero Informático
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
            Desarrollador apasionado por crear soluciones innovadoras.
          </p>
          <a
            href="#projects"
            className="bg-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300 animate__animated animate__fadeIn animate__delay-3s"
          >
            Ver Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;