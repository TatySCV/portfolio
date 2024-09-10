import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Estilos personalizados para las tarjetas
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60px', // Ajustado para visibilidad en pantallas pequeñas
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#6326A2',
  },
  // Evita que las tarjetas se expandan más allá del contenedor
  flexShrink: 0,
  maxWidth: '100%', // Asegura que las tarjetas no se desborden
}));

const SkillCard = ({ skill }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h6" align="center">{skill}</Typography>
    </CardContent>
  </StyledCard>
);

const SkillCarousel = ({ title, skills }) => {
  const itemTemplate = (skill) => <SkillCard skill={skill} />;

  // Opciones de responsividad actualizadas
  const responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '992px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">{title}</h3>
      <div className="overflow-x-auto">
        <Carousel
          value={skills}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={itemTemplate}
          style={{ width: '100%' }} // Asegura que el carrusel ocupe todo el ancho disponible
        />
      </div>
    </div>
  );
};

export default SkillCarousel;