import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Header from "../component/header";

type StudentFormFields = {
  firstname: string;
  lastname: string;
  email: string;
  agreement_id: string;
};

const initialValues: StudentFormFields = {
  firstname: "",
  lastname: "",
  email: "",
  agreement_id: "",
};

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const StyledTextField = styled(TextField)({
  marginBottom: "1rem",
});

const StudentForm = () => {
  const [formValues, setFormValues] =
    useState<StudentFormFields>(initialValues);
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/agreement")
      .then((response) => setAgreements(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/student", formValues)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
      <StyledForm onSubmit={handleFormSubmit}>
        <Typography variant="h3" component="h1" align="center">
          Student Form
        </Typography>
        <StyledTextField
          name="firstname"
          label="Firstname"
          value={formValues.firstname}
          onChange={handleFormChange}
        />
        <StyledTextField
          name="lastname"
          label="Lastname"
          value={formValues.lastname}
          onChange={handleFormChange}
        />
        <StyledTextField
          name="email"
          label="Email"
          type="email"
          value={formValues.email}
          onChange={handleFormChange}
        />
        <StyledTextField
          select
          name="agreement_id"
          label="Agreement"
          value={formValues.agreement_id}
          onChange={handleFormChange}
          sx={{ width: "24ch" }}
        >
          {agreements.map((agreement: any) => (
            <MenuItem key={agreement.id} value={agreement.id}>
              {agreement.name} ({agreement.hours} hours)
            </MenuItem>
          ))}
        </StyledTextField>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </StyledForm>
    </>
  );
};

export default StudentForm;
