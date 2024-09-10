import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { FaReact, FaPython, FaDatabase, FaGithub, FaLinkedin, FaAndroid, FaPhp } from 'react-icons/fa';

const experiences = [
  {
    year: '2019 - 2020',
    title: 'Casa Siegmund - Victoria',
    description: 'Práctica profesional Técnico nivel medio Programación. Manejo de Base de Datos MySQL, inventariado e ingreso y modificación de productos.',
    icon: <FaDatabase />
  },
  {
    year: '2022',
    title: 'Challwafe - Temuco',
    description: 'Servicios para desarrollo de aplicación traductor mapudugun-español, para Android nativo (Java).',
    icon: <FaAndroid />
  },
  {
    year: '2023',
    title: 'Ilustre Municipalidad - Curacautín',
    description: 'Práctica profesional Técnico nivel superior Analista Programador. Mantención de sistemas implementados en PHP.',
    icon: <FaPhp />
  },
  {
    year: '2023 - Actualidad',
    title: 'Teraflex - Temuco',
    description: 'Sistema web ANPR con integración de Inteligencia Artificial, y monitoreo en tiempo real.',
    icon: <FaPython />
  }
];

export default function CustomizedTimeline() {
  return (
    <Timeline>
      {experiences.map((item, index) => (
        <TimelineItem key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingX: { xs: 2, sm: 4 } }}>
          <TimelineOppositeContent
            sx={{
              display: { xs: 'none', sm: 'flex' }, // Oculta el contenido en pantallas pequeñas
              alignItems: 'center',
              flexBasis: '30%',
              flexShrink: 0,
              textAlign: 'left',
              paddingRight: 2
            }}
            variant="body2"
            color="white"
          >
            {item.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector 
              sx={{
                bgcolor: '#6326A2',
                width: 5
              }}
            />
            <TimelineDot
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2.2rem',
                bgcolor: '#6326A2',
                color: 'white',
              }}
            >
              {item.icon}
            </TimelineDot>
            <TimelineConnector 
              sx={{
                bgcolor: '#6326A2',
                width: 5
              }}
            />
          </TimelineSeparator>
          <TimelineContent 
            sx={{
              flexBasis: '100%',
              textAlign: 'center',
              paddingLeft: 2,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              paddingY: 2
            }}
          >
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}