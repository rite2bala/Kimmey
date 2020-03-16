import React from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
//import Container from "@material-ui/core/Container"
import useHCPState from './../../../hooks/useHCPState';

const useStyles = makeStyles(theme => ({
  container: {
    fontFamily: '"Fira Sans"',
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    left: 110,
    fontFamily: '"Fira Sans"',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
    width: 300
  },
  textField1: {
    left: 80,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(5),
    width: 120
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  submit: {
    margin: theme.spacing(1)
  }
}));

export default function PatientForm(value, handleChanges) {
  const classes = useStyles();

  const { 
    patientFullName, setPatientFullName, 
    patientAge, setPatientAge, 
    patientWeight, setPatientWeight,
    patientIDinHospital, setpatientIDinHospital,
  } = useHCPState();

  const handleChange = name => event => {
    if (name === "patientFullName") {
      setPatientFullName(event.target.value);
    }
    if (name === "patientAge") {
      setPatientAge(event.target.value);
    }
    if (name === "patientWeight") {
      setPatientWeight(event.target.value);
    }
    if (name === "patientIDinHospital") {
      setpatientIDinHospital(event.target.value);
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
        <TextField
          label="Patient Full Name"
          id="patientFullName"
          className={classes.textField}
          onChange={handleChange("patientFullName")}
          value={patientFullName}
          margin="normal"
        />
        <TextField
          type="number"
          label="Patient Age"
          id="patientAge"
          className={classes.textField1}
          onChange={handleChange("patientAge")}
          value={patientAge}
          margin="normal"
        />
        <TextField
          type="number"
          label="Patient Weight"
          id="patientWeight"
          className={classes.textField1}
          onChange={handleChange("patientWeight")}
          value={patientWeight}
          margin="normal"
        />
        <TextField
          type="string"
          label="Patient ID"
          id="patientIDinHospital"
          className={classes.textField1}
          onChange={handleChange("patientIDinHospital")}
          value={patientIDinHospital}
          margin="normal"
        />
        <br />
    </React.Fragment>
  );
}