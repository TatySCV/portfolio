import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Asegúrate de que la ruta sea correcta

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.'
  },
  // Agrega más proyectos aquí
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-500 mb-12">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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