import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4lrcl28', 'template_g6jlooi', e.target, 'yiySfColtS1PTd1_a')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        {isSent ? (
          <p className="text-center text-purple-500">¡Mensaje enviado con éxito!</p>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-0 bg-black rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-purple-600 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-purple-600 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-black text-white border border-purple-600 rounded focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-500 transition duration-300"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;