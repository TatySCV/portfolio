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
  height: '50px',
  borderRadius: theme.shape.borderRadius,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#6326A2',
  },
}));

const SkillCard = ({ skill }) => (
  <StyledCard>
    <CardContent>
      <Typography variant="h6">{skill}</Typography>
    </CardContent>
  </StyledCard>
);

const SkillCarousel = ({ title, skills }) => {
  const itemTemplate = (skill) => <SkillCard skill={skill} />;

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-l font-semibold text-purple-400 mb-4">{title}</h3>
      <Carousel
        value={skills}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={itemTemplate}
      />
    </div>
  );
};

export default SkillCarousel;