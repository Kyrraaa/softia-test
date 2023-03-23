import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Header from "../component/header";

type AgreementFormFields = {
  name: string;
  hours: number;
};

const initialValues: AgreementFormFields = {
  name: "",
  hours: 0,
};

const Agreement = () => {
  const [formValues, setFormValues] =
    useState<AgreementFormFields>(initialValues);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);

    axios
      .post("http://localhost:8000/api/agreement", formValues)
      .then((response) => {
        console.log(response);
      });
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography variant="h3" component="h1" align="center">
              Agreement Form
            </Typography>
            <TextField
              name="name"
              label="Name"
              value={formValues.name}
              onChange={handleFormChange}
            />
            <TextField
              name="hours"
              label="Hours"
              value={formValues.hours}
              onChange={handleFormChange}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Agreement;
