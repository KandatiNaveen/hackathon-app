import React from 'react';
import { Container, Box, Typography, Button, Divider } from '@mui/material';
import './Overview.css';
import { Link } from 'react-router-dom';

const OverviewSection = ({ challenge }) => {
  
  return (
    <div className="overview-container">
      <Box className="overview-header">
        <Typography variant="h6" className="overview-title">
          Overview
        </Typography>
        <Box className="header-buttons">
        <Link to='/Hackathon/editforms'> <Button variant="contained" className="edit-btn">
            Edit
          </Button>
          </Link>
          <Button variant="outlined" className="delete-btn">
            Delete
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" className="overview-content">
       {challenge.description}
      </Typography>
    
    </div>
  );
};

export default OverviewSection;
