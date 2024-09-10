import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-purple-800 flex items-center space-x-2">
          <span>TSCV</span>
        </a>
        <div className="hidden md:flex items-center space-x-12">
          <a href="#home" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <FaHome />
            <span>Inicio</span>
          </a>
          <a href="#about" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <FaUser />
            <span>Sobre Mí</span>
          </a>
          <a href="#projects" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <FaProjectDiagram />
            <span>Proyectos</span>
          </a>
          <a href="#contact" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <FaEnvelope />
            <span>Contacto</span>
          </a>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <a href="#home" className="hover:text-purple-400">
            <FaHome />
          </a>
          <a href="#about" className="hover:text-purple-400">
            <FaUser />
          </a>
          <a href="#projects" className="hover:text-purple-400">
            <FaProjectDiagram />
          </a>
          <a href="#contact" className="hover:text-purple-400">
            <FaEnvelope />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;