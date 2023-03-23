import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Header from "../component/header";

type CertificateFormFields = {
  student_id: number;
  message: string;
};

type Student = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  agreement: {
    name: string;
    hours: number;
  };
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

const initialValues: CertificateFormFields = {
  student_id: 0,
  message: "",
};

const CertificateForm = () => {
  const [formValues, setFormValues] =
    useState<CertificateFormFields>(initialValues);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(
    undefined
  );

  useEffect(() => {
    axios.get<Student[]>("http://localhost:8000/api/student").then((res) => {
      setStudents(res.data);
    });
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/certificate", formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleStudentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const student_id = parseInt(event.target.value);
    const student = students.find((s) => s.id === student_id);
    setSelectedStudent(student);
    setFormValues({
      ...formValues,
      student_id: student_id,
      message: `Bonjour ${student?.lastname} ${student?.firstname},

Vous avez suivi ${student?.agreement.hours} heure(s) de formation chez FormationPlus.
Pouvez-vous nous retourner ce mail avec la pièce jointe signée.

Cordialement,
FormationPlus`,
    });
  };

  return (
    <>
      <Header />
      <StyledForm onSubmit={handleFormSubmit}>
        <Typography variant="h3" component="h1" align="center">
          Certificate Form
        </Typography>
        <StyledTextField
          select
          name="student_id"
          label="Student"
          value={formValues.student_id}
          onChange={handleStudentChange}
          fullWidth
        >
          {students.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              {student.firstname} {student.lastname}
            </MenuItem>
          ))}
        </StyledTextField>
        {selectedStudent && (
          <StyledTextField
            name="agreementName"
            label="Agreement Name"
            value={selectedStudent.agreement.name}
            disabled
            fullWidth
          />
        )}
        <StyledTextField
          name="message"
          label="Certificate Message"
          value={formValues.message}
          onChange={handleFormChange}
          multiline
          fullWidth
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </StyledForm>
    </>
  );
};

export default CertificateForm;
