import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import futureTrain from '../images/futureTrain.png';
import border from '../images/border.webp'; // Ensure you have the border image imported

const FutureCard = () => {
  const title = "Future";
  const subtitle = "(of tomorrow)";
  const description = [
    "The era of robotics,",
    "transportation, and cyberspace"
  ];
  const image = futureTrain;
  const link = "/timeline/future";

  return (
    <Box sx={{ minWidth: 300 }}>
      <Card
        variant=""
        sx={{
          backgroundColor: '#b48f4a',
          borderWidth: '20px',
          borderStyle: 'solid',
          borderImage: `url(${border}) 30 stretch`,
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}> 
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{subtitle}</Typography>
          {description.map((line, index) => (
            <Typography key={index} variant="body1">{line}</Typography>
          ))}
          <br />
          <img
            src={image}
            alt="Future Train" // Added alt attribute for accessibility
            width="200"
            height="200"
            style={{ display: 'block', margin: '0 auto' }} 
          />
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Link to={link}>
            <Button
              size="small"
              sx={{
                backgroundColor: '#795548', 
                color: '#FFFFFF',            
                '&:hover': {
                  backgroundColor: '#6d4c41', 
                },
              }}>
              View
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
}

export default FutureCard;
