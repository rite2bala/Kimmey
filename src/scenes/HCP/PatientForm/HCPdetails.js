import React, { /*Component */ } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useHCPState from './../../../hooks/useHCPState';


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

  const { nameOfHCP, setnameOfHCP,
    nameOfHCP2, setnameOfHCP2,
    hospitalPONumber, sethospitalPONumber,
    hospitalContact, sethospitalContact,
    cityofHCP, setcityofHCP,
    leukapheresisDate, setleukapheresisDate,
    setleukapheresisLocation,leukapheresisLocation,
   
    cryoPreservedLeukapheresisLocation,setcryoPreservedLeukapheresisLocation
    ,setreinfusionLocation,reinfusionLocation,

  } = useHCPState();


  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log("Your data here : ", { name })
    if (name === "nameOfHCP") {
      setnameOfHCP(event.target.value);
    }
    if (name === "nameOfHCP2") {
      setnameOfHCP2(event.target.value);
    }
    if (name === "hospitalPONumber") {
      sethospitalPONumber(event.target.value);
    }
    if (name === "hospitalContact") {
      sethospitalContact(event.target.value);
    }
    if (name === "cityofHCP") {
      setcityofHCP(event.target.value);
    }
    if (name === "leukapheresisDate") {
      setleukapheresisDate(event.target.value);
    }
    if (name === "leukapheresisLocation") {
      setleukapheresisLocation(event.target.value);
    }
    if (name === "cryoPreservedLeukapheresisLocation") {
      setcryoPreservedLeukapheresisLocation(event.target.value);
    }
    if (name === "reinfusionLocation") {
      setreinfusionLocation(event.target.value);
    }
    if (name === "leukapheresisDate") {
      setleukapheresisDate(event.target.value);
    }
  };


  return (

    <React.Fragment>
      <CssBaseline />
      <TextField
        label="HCP1 Name"
        id="nameOfHCP"
        className={classes.textField}
        onChange={handleChange("nameOfHCP")}
        value={nameOfHCP}
        margin="normal" />

      <TextField
        id="nameOfHCP2"
        label="Name of second Doctor"
        className={classes.textField}
        onChange={handleChange("nameOfHCP2")}
        value={nameOfHCP2}
        margin="normal" />

      <br />
      <TextField
        id='hospitalPONumber'
        className={classes.textField}
        label="Hospital PO Number"
        onChange={handleChange("hospitalPONumber")}
        margin="normal"
        value={hospitalPONumber}
      />
      <TextField

        label="Hospital Contact"
        //type="number"
        className={classes.textField}
        onChange={handleChange("hospitalContact")}
        id='hospitalContact'
        margin="normal"
        value={hospitalContact}
      />

      <TextField
        label="City of Hospital"
        className={classes.textField}
        onChange={handleChange("cityofHCP")}
        margin="normal"
        id="cityofHCP"
        value={cityofHCP}
      />
      <br />

      <br />
      <TextField
        label="Leukapheresis Date"
        type='date'
        className={classes.textField}
        onChange={handleChange("leukapheresisDate")}
        margin="normal"
        id="leukapheresisDate"
        value={leukapheresisDate}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField

        label="Leukapheresis Location"
        className={classes.textField}
        onChange={handleChange("leukapheresisLocation")}
        margin="normal"
        id='leukapheresisLocation'
        value={leukapheresisLocation}
      />

      <TextField
        placeholder="Cryo Preserved Leukapheresis Location"
        label="Cryo Leukapheresis Location"
        className={classes.textField}
        onChange={handleChange("cryoPreservedLeukapheresisLocation")}
        margin="normal"
        id='cryoPreservedLeukapheresisLocation'
        size='medium'
        value={cryoPreservedLeukapheresisLocation}
      />
      <br />
      <TextField
        placeholder="Reinfusion Location"
        label="Reinfusion Lovation"
        className={classes.textField}
        onChange={handleChange("reinfusionLocation")}
        margin="normal"
        id='reinfusionLocation'
        value={reinfusionLocation}
      />
      
      <br />
      
    </React.Fragment>
  );
}


