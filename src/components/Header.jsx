import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-purple-800 flex items-center space-x-2">
          <span>TSCV</span>
        </a>
        <div className="flex items-center space-x-12">
          <a href="#home" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <i className="fas fa-home"></i>
            <span>Inicio</span>
          </a>
          <a href="#about" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <i className="fas fa-user"></i>
            <span>Sobre Mí</span>
          </a>
          <a href="#projects" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <i className="fas fa-project-diagram"></i>
            <span>Proyectos</span>
          </a>
          <a href="#contact" className="flex items-center space-x-1 hover:text-purple-400 text-sm">
            <i className="fas fa-envelope"></i>
            <span>Contacto</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;