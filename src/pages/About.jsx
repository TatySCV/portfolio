import React from 'react';
import { FaReact, FaPython, FaDatabase, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Iconos para habilidades
import TimeLine from '../components/TimeLine';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Sobre Mí</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Línea de Tiempo */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Mi Carrera</h3>
            <TimeLine />
          </div>

          {/* Habilidades y Stack */}
          <div>
            {/* <h3 className="text-2xl font-semibold text-purple-400 mb-4">Habilidades y Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <FaReact className="text-purple-500 text-4xl mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-purple-400">React</h4>
                <p>Experiencia con React y Vite.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <FaPython className="text-purple-500 text-4xl mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-purple-400">Python</h4>
                <p>Conocimientos avanzados en Python y Django.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <FaDatabase className="text-purple-500 text-4xl mb-4 mx-auto" />
                <h4 className="text-lg font-semibold text-purple-400">SQL</h4>
                <p>Gestión de bases de datos con MySQL y PostgreSQL.</p>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;