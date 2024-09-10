import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// Componente de tarjeta con efecto de hover
const HoverCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// Contenedor de contenido para la descripción con fondo púrpura y texto blanco
const HoverContent = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6326A2',  // Color púrpura
  color: 'white',
  transition: 'opacity 0.3s ease',  // Reducido el tiempo para una transición más rápida
  opacity: 0,
  '&:hover': {
    opacity: 1,
  },
}));

// Contenedor de contenido para el título con fondo negro y texto blanco
const TitleContent = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'black',  // Fondo negro
  color: 'white',  // Texto blanco
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

const ProjectCard = ({ title, description }) => {

  return (
    <HoverCard variant="outlined" style={{ width: 300, height: 200 }}>
      <TitleContent>
        <Typography variant="h6">{title}</Typography>
      </TitleContent>
      <HoverContent>
        <Typography variant="body2">{description}</Typography>
      </HoverContent>
    </HoverCard>
  );
};

export default ProjectCard;