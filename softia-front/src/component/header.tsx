import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Softia Front
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Certificat
        </Button>
        <Button color="inherit" component={Link} to="/student">
          Student
        </Button>
        <Button color="inherit" component={Link} to="/agreement">
          Agreement
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
