import React /*Component */ from "react";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  container: {
    fontFamily: '"Fira Sans"',
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    fontFamily: '"Fira Sans"',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(5),
    width: 200
  },
  textField1: {
    left: 250,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(0),
    width: 300
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


export default function Patientform(value, handleChanges ) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    patientFullName: "",
    patientAge: "",
    patientWeight: "",
    patinetIDInHospital:"",
  });

  const handleChange = name => event => {
     setValues({ ...values, [name]: event.target.value });
     console.log("Your data here : ", { name });
  }
     // var  values=value
  //var handleChange =handleChanges();
  // var data = values;

  //    const { values, handleChange } = this.props;
  return (
    
    <React.Fragment>
      <CssBaseline />
      <TextField
        label="Patient Full Name"
        id="patientFullName"
        className={classes.textField}
        onChange={handleChange("patientFullName")}
        margin="normal"
      />
      <TextField
        placeholder="Patient Age"
        label="Patient Age"
        type="number"
        className={classes.textField}
        onChange={handleChange("patientAge")}
        margin="normal"
        id="patientAge"
      />

      <TextField
        placeholder="Patient Weight"
        label="Patient Weight"
        type="number"
        className={classes.textField}
        onChange={handleChange("patientWeight")}
        margin="normal"
      />
        <TextField
        placeholder="Patient ID in Hospital"
        label="Patient ID in Hospital"
        type="string"
        className={classes.textField}
        onChange={handleChange("patinetIDInHospital")}
        id="patinetIDInHospital"
        margin="normal"
      />
    <br />
    </React.Fragment>
  );
}
