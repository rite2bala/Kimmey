import React, { /*Component */ } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


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
    //margin: theme.spacing(3, 0, 2),
    margin: theme.spacing(1),

  }
}));



export default function HCPForm() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
  
    nameOfHCP: "",
    nameOfHCP2: '',
    hospitalPONumer: '',
    hospitalContact: "",
    cityofHCP: "",
    leukapheresisDate: '',
    leukapheresisLocation: '',
    cryoPreservedLeukapheresisLocation: '',
    reinfusionDate: '',
    reinfusionLocation: '',

  });



  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log("Your data here : ", { name })
  };
//  var data = values;

  //    const { values, handleChange } = this.props;
  return (

    <React.Fragment>
      <CssBaseline />



      <TextField
        label="HCP 1 Name"
        id="nameOfHCP"
        placeholder="Name of first Doctor"
        className={classes.textField}
        onChange={handleChange("nameOfHCP")}
        margin="normal" />

      <TextField
        id="NameOfHCP2"
        placeholder="Name of second Doctor"
        label="Name of second Doctor"
        className={classes.textField}
        onChange={handleChange("nameOfHCP2")}
        margin="normal" />
     <br/>


      <TextField
        className={classes.textField}
        placeholder="Hospital PO Number"
        type="string"
        label="Hospital PO Number"
        onChange={handleChange("hospitalPONumber")}
        margin="normal"
        id='hospitalPONumber'
      />

      <TextField
        placeholder="Hospital Contact"
        label="Hospital Contact"
        //type="number"
        className={classes.textField}
        onChange={handleChange("hospitalContact")}
        id='hospitalContact'
        margin="normal" />

      <TextField
        placeholder="Address of Hospital"
        label="Address of Hospital"
        className={classes.textField}
        onChange={handleChange("AddressOfHCP")}
        margin="normal"
        id='AddressOfHCP' />

      <br />

      <br />
      <TextField
        placeholder="Leukapheresis Date"
        label="Leukapheresis Date"
        className={classes.textField}
        onChange={handleChange("LeukapheresisDate")}
        margin="normal"
        id="LeukapheresisDate" />

      <TextField
        placeholder="Leukapheresis Location"
        label="LeukapheresisLocation"
        className={classes.textField}
        onChange={handleChange("LeukapheresisLocation")}
        margin="normal"
        id='LeukapheresisLocation'
      />

      <TextField
        placeholder="Cryo Preserved Leukapheresis Location"
        label="Cryo Leukapheresis Location"
        className={classes.textField}
        onChange={handleChange("CryoPreservedLeukapheresisLocation")}
        margin="normal"
        id='CryoPreservedLeukapheresisLocation'
        size='medium'
      />
      <br />
      <TextField
        placeholder="Reinfusion Location"
        label="Reinfusion Lovation"
        className={classes.textField}
        onChange={handleChange("ReinfusionLocation")}
        margin="normal"
        id='ReinfusionLocation'
      />
      <TextField placeholder="Reinfusion Date"
        label="Reinfusion Date"
        className={classes.textField}
        onChange={handleChange("ReinfusionDate")}
        margin="normal"
        id='ReinfusionDate'
      />

      <br />
    </React.Fragment>
  );
}


//export default Patientform;