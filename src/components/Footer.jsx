import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 shadow-lg fixed bottom-0 left-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">© 2024 TSCV. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a href="https://github.com/TatySCV" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-400">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/TatySCV" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-400">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:tcampos.dev@gmail.com" className="text-purple-600 hover:text-purple-400">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;