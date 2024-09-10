import React from 'react';
import TimeLine from '../components/TimeLine';
import Stack from '../components/Stack';

const backEndSkills = ['Python', 'Django', 'IA', 'Java', 'Java Android', 'PHP', 'Laravel'];
const frontEndSkills = ['React', 'HTML', 'CSS', 'Tailwind', 'JavaScript'];
const dbSkills = ['MySQL', 'SQL', 'MongoDB', 'Power BI', 'Firebase'];
const cloudSkills = ['AWS EC2', 'AWS RDS', 'AWS Amplify', 'AWS Route 53'];
const toolsSkills = ['GitHub', 'Yolo', 'Pentaho', 'VS Code', 'Windows Server', 'macOS'];

const About = () => {
  return (
    <section id="about" className="py-10 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-500 mb-8 md:mb-12">Sobre Mí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Línea de Tiempo */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">Mi Carrera</h3>
            <TimeLine />
          </div>

          {/* Carruseles de Habilidades */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">Mis Habilidades</h3>
            <Stack title="Back-End" skills={backEndSkills} />
            <Stack title="Front-End" skills={frontEndSkills} />
            <Stack title="Base de Datos" skills={dbSkills} />
            <Stack title="Cloud & DevOps" skills={cloudSkills} />
            <Stack title="Herramientas y Sistemas" skills={toolsSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;