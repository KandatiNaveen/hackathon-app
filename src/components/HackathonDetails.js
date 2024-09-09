import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import "./HackathonDetails.css"
import Timer from "./Timer";

const Header = ({ challenge }) => {
  return (
    <div className="container-header">
      <Typography variant="body1" className="start-time" sx={{ mt: "10px" }}>
        {<Timer targetDate={challenge.startsIn} endDate={challenge.endsIn} />}
      </Typography>
      <Typography variant="h4" className="title">
        {challenge?.title}
      </Typography>
      <Typography variant="body1" className="subtitle">
        Identify the class to which each butterfly belongs to
      </Typography>
      <Button variant="contained" className="difficulty-btn">
        {challenge.level}
      </Button>
    </div>
  );
};

export default Header;
