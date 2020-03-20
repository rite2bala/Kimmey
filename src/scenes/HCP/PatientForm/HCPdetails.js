import React, { /*Component */ } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem"
import CssBaseline from "@material-ui/core/CssBaseline";
import useHCPState from './../../../hooks/useHCPState';


const useStyles = makeStyles(theme => ({
  container: {
    fontFamily: '"Fira Sans"',
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    left: 140,
    fontFamily: '"Fira Sans"',
    marginLeft: theme.spacing(2),
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

  const HCPList = [
    { value: "John Hopkins All Childeren's hospital", label: "John Hopkins All Childeren's hospital" },
    { value: "The University of Kansas Cancer Center", label: "The University of Kansas Cancer Center" },
    { value: "The Children's Mercy Hospital", label: "The Children's Mercy Hospital" },
    { value: "Barnes - Jewish Hospital", label: "Barnes - Jewish Hospital" },
    { value: "Baylor University Medical Center", label: "Baylor University Medical Center" },
    { value: "Mayo Clinic CAR-T Cell Therapy Program: Rochester", label: "Mayo Clinic CAR-T Cell Therapy Program: Rochester" },
    { value: "University of Minnesota Masonic Children's Hospital", label: "University of Minnesota Masonic Children's Hospital" },


  ];
  const CityList = [
    { value: "Tampa, FL", label: "Tampa, FL" },
    { value: "Kansas City, Missouri", label: "Kansas City, Missouri" },
    { value: "St Louis, Missouri", label: "St Louis, Missouri" },
    { value: "Dallas, Texas", label: "Dallas, Texas" },
    { value: "Rochester, Minnesota", label: "Rochester, Minnesota" },
    { value: "Minneapolis, MN", label: "Minneapolis, MN" },
  ];

  const [values, setValues] = React.useState({
    nameOfHCP: '',
    nameOfHCP2: '',
    hospitalPONumer: '',
    hospitalContact: '',
    cityofHCP: '',
    countryofHCP: '',
    leukapheresisDate: '',
    leukapheresisLocation: '',
    cryoPreservedLeukapheresisLocation: '',
    reinfusionDate: '',
    reinfusionLocation: '',
  });

  const {
    hcp,
    setnameOfHCP,
    setnameOfHCP2,
    sethospitalPONumber,
    sethospitalContact,
    setcityofHCP,
    setcountryofHCP,
    setleukapheresisDate,
    setleukapheresisLocation,
    setcryoPreservedLeukapheresisLocation,
    setreinfusionLocation,  
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
    if (name === "countryofHCP") {
      setcountryofHCP(event.target.value);
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

  };


  return (

    <React.Fragment>
      <CssBaseline />
      <TextField
        label="First HCP Name"
        id="nameOfHCP"
        className={classes.textField}
        onChange={handleChange("nameOfHCP")}
        value={hcp.nameOfHCP}
        margin="normal" />

      <TextField
        id="nameOfHCP2"
        label="Second HCP Name"
        className={classes.textField}
        onChange={handleChange("nameOfHCP2")}
        value={hcp.nameOfHCP2}
        margin="normal" />
      <TextField
        label="Hospital Contact"
        //type="number"
        className={classes.textField}
        onChange={handleChange("hospitalContact")}
        id='hospitalContact'
        margin="normal"
        value={hcp.hospitalContact}
      />
      ¸<br />
      <br />
      <TextField
        id='hospitalPONumber'
        className={classes.textField}
        label="Hospital PO Number"
        onChange={handleChange("hospitalPONumber")}
        margin="normal"
        value={hcp.hospitalPONumber}
      />

      <TextField
        required
        label="City of HCP"
        id="cityofHCP"
        select
        className={classes.textField}
        value={hcp.cityofHCP}
        onChange={handleChange("cityofHCP")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin="normal"
        required
      >
        {CityList.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <TextField
        label="Leukapheresis Date"
        type='date'
        className={classes.textField}
        onChange={handleChange("leukapheresisDate")}
        margin="normal"
        id="leukapheresisDate"
        value={hcp.leukapheresisDate}
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
        required
        label="Leukapheresis Location"
        id="leukapheresisLocation"
        select
        className={classes.textField}
        value={hcp.leukapheresisLocation}
        onChange={handleChange("leukapheresisLocation")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}

        margin="normal"
        required
      >
        {HCPList.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        placeholder="Cryo Preserved Location"
        label="Cryo Preserved Location"
        className={classes.textField}
        onChange={handleChange("cryoPreservedLeukapheresisLocation")}
        margin="normal"
        id='cryoPreservedLeukapheresisLocation'
        value={hcp.cryoPreservedLeukapheresisLocation}
      />
      <br />
      <br />
      <TextField
        required
        label="Reinfusion Location"
        id="reinfusionLocation"
        select

        className={classes.textField}
        value={hcp.reinfusionLocation}
        onChange={handleChange("reinfusionLocation")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        fullWidth
        margin="normal"
        required
      >
        {HCPList.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


      <br />

    </React.Fragment>
  );
}


