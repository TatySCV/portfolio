import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Form from '../components/Form';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Contacto</h2> */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Formulario de Contacto */}
          <div className="flex-1">
            <Typography variant="h5" className="text-purple-400 mb-4">Envíame un Mensaje</Typography>
            <Form />
          </div>

          {/* Información de Contacto */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <Typography variant="h5" className="text-purple-400 mb-4">Información de Contacto</Typography>
            <div className="flex flex-col space-y-4 items-center">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-purple-500" />
                <a href="mailto:tcampos.dev@gmail.com" className="hover:text-purple-400">tcampos.dev@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaGithub className="text-purple-500" />
                <a href="https://github.com/TatySCV" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-purple-500" />
                <a href="https://www.linkedin.com/in/TatySCV" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;