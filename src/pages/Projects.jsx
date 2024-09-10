import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Asegúrate de que la ruta sea correcta

const projects = [
  {
    title: 'Portix - Sistema ANPR con IA',
    description: 'Sistema de monitoreo de tránsito con cámaras de seguridad utilizando Inteligencia Artificial para la lectura de matrículas y el monitoreo en tiempo real.'
  },
  {
    title: 'Sistema de Gestión de Estadios',
    description: 'Sistema web para la unidad de deporte de la Municipalidad de Curacautín que gestiona el estadio municipal, permitiendo la división de una cancha grande en varias canchas pequeñas y la gestión de horas de reserva para los usuarios.'
  },
  {
    title: 'Portafolio Personal',
    description: 'Portafolio personal desarrollado en React para mostrar habilidades y proyectos, con funcionalidades como una sección de contacto utilizando EmailJS y un carrusel de habilidades.'
  },
  {
    title: 'Aplicación de Traducción Mapudungun-Español',
    description: 'Desarrollada para Android en Java, esta aplicación traduce entre los idiomas Mapudungun y Español, facilitando la comunicación y preservación del idioma Mapudungun.'
  },
  {
    title: 'Aplicación de Inventario Android',
    description: 'Sistema de gestión de inventario desarrollado en Java, permitiendo la administración eficiente de productos, control de stock y generación de reportes.'
  },
  {
    title: 'Sistema de Gestión de Biblioteca',
    description: 'Aplicación de escritorio en Java para la gestión de bibliotecas, incluyendo funcionalidades para la catalogación de libros, gestión de usuarios y seguimiento de préstamos.'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-500 mb-12">
          Mis Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;