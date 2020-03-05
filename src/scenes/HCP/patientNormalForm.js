import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import Grid from '@material-ui/core/Grid';
//import Fab from "@material-ui/core/Fab";
//import { config } from "./config.json";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        fontFamily: '"Fira Sans"',
        display: "flex",
        flexWrap: "wrap"
    },
    paper: {
        width: '70%',

        marginLeft: '15%',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
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
        margin: theme.spacing(3, 0, 2)
    }
}));


const HCP = [
    { value: "John Hopkins All Childeren's hospital", label: "John Hopkins All Childeren's hospital" },
    { value: "The University of Kansas Cancer Center", label: "The University of Kansas Cancer Center" },
    { value: "The Children's Mercy Hospital", label: "The Children's Mercy Hospital" },
    { value: "Barnes - Jewish Hospital", label: "Barnes - Jewish Hospital" },
    { value: "Baylor University Medical Center", label: "Baylor University Medical Center" },
    { value: "Mayo Clinic CAR-T Cell Therapy Program: Rochester", label: "Mayo Clinic CAR-T Cell Therapy Program: Rochester" },
    { value: "University of Minnesota Masonic Children's Hospital", label: "University of Minnesota Masonic Children's Hospital" },
    { value: "", label: "" },

];

const Payer = [
    { value: "Aetna", label: "Aetna" },
    { value: "Bluecross Blueshield", label: "Bluecross Blueshield" },
    { value: "Cigna", label: "Cigna" },
    { value: "Kaiser Permanente", label: "Kaiser Permanente" },
    { value: "United Health Group", label: "United Health Group" },
];

// const Cryoport = [
//     {value:"Cryport Hub, NJ", label:"Cryport Hub, NJ"},
//     {value:"Cryport Hub, CA", label:"Cryport Hub, CA"},
// ];
// const Site = [
//     {value:"Morris Plains, NJ, USA", label:"Morris Plains, NJ, USA"},

// ];
const today = new Date().toISOString().substring(0, 10);

export default function TextFields() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const [values, setValues] = React.useState({
        patientFullName: '',
        patientAge: '',
        patientWeight: '',
        patientIDInHospital: '',
        nameOfHCP: "",
        nameOfHCP2: '',
        hospitalName: '',
        hospitalPONumer: '',
        hospitalContact: "",
        cityofHCP: "",
        leukapheresisDate: '',
        leukapheresisLocation: '',
        cryoPreservedLeukapheresisLocation: '',
        reinfusionLocation: '',
        payerName: '',
        payerApprovalNumber: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    function handleCheckOpen() {
        setOpen(true);
    }

    function handleCheckClose() {
        setOpen(false);
    }
    var data = values;
    var handleSubmit = event => {
        event.preventDefault();
        console.log("Your data here : ", { data })
      //  setDialog(true);
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className={classes.paper} maxWidth="sm">
                
                <div style={{ padding: 16, margin: 'auto', maxWidth: 1600 }} >
                    <h1 style={{ color: "teal" }} variant="h4" align="center" component="h1" gutterBottom>Kymriah Patient Request form</h1>
                    <form className={classes.container} >
                    <Typography>
                        {/* Menu  */}
                        <h3 > Patient details:</h3>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    label="Patient Full Name"
                                    id="patientFullName"
                                    className={classes.textField}
                                    onChange={handleChange("patientFullName")}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Patient Age"
                                    label="Patient Age"
                                    type="number"
                                    className={classes.textField}
                                    onChange={handleChange("patientAge")}
                                    margin="normal"
                                    id="patientAge"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Patient Weight"
                                    label="Patient Weight"
                                    type="number"
                                    className={classes.textField}
                                    onChange={handleChange("patientWeight")}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    placeholder="Patient ID in Hospital"
                                    label="Patient ID in Hospital"
                                    type="string"
                                    className={classes.textField}
                                    onChange={handleChange("patientIDInHospital")}
                                    id="patientIDInHospital"
                                    margin="normal"
                                />

                            </Grid>
                        </Grid>
                        <br/>
                        <h3> HCP details:</h3>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    label="Name of first Doctor"
                                    id="nameOfHCP"
                                    placeholder="Name of first Doctor"
                                    className={classes.textField}
                                    onChange={handleChange("nameOfHCP")}
                                    margin="normal" /></Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="NameOfHCP2"
                                    placeholder="Name of second Doctor"
                                    label="Name of second Doctor"
                                    className={classes.textField}
                                    onChange={handleChange("nameOfHCP2")}
                                    margin="normal" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="hospitalName"
                                    fullwidth
                                    select
                                    label="Hospital Name"
                                    className={classes.textField}
                                    value={values.Product}
                                    onChange={handleChange("hospitalName")}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                    // helperText="Please select your response"
                                    margin="normal"
                                >
                                    {HCP.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={3}>

                                <TextField
                                    label="Hospital PO Numer"
                                    id="hospitalPONumer"
                                    className={classes.textField}
                                    onChange={handleChange("hospitalPONumer")}
                                    margin="normal"
                                />
                            </Grid>


                            {/* Menu  */}

                        </Grid>
                        <br/>
                        <h3> Payer details:</h3>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="payerName"
                                    select
                                    fullwidth
                                    label="Payer Name"
                                    className={classes.textField}
                                    value={values.Product}
                                    onChange={handleChange("payerName")}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                    margin="normal"
                                >
                                    {Payer.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    id="payerApprovalNumber"
                                    placeholder="Optional"
                                    label="Payer Approval Number"
                                    className={classes.textField}
                                    onChange={handleChange("payerApprovalNumber")}
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <h3> Leukapheresis details:</h3>
                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="leukapheresisDate"
                                    label="Leukapheresis Date"
                                    type="date"
                                    value={values.ExpiryDate}
                                    onChange={handleChange("leukapheresisDate")}
                                    className={classes.textField}
                                    margin="normal"
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="leukapheresisLocation"
                                    fullwidth
                                    select
                                    label="Leukapheresis Location"
                                    className={classes.textField}
                                    value={values.Product}
                                    onChange={handleChange("leukapheresisLocation")}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}

                                    margin="normal"
                                >
                                    {HCP.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    required
                                    id="cryoPreservedLeukapheresisLocation"
                                    fullwidth
                                    select
                                    label="Cryo Preserved Leukapheresis Location"
                                    className={classes.textField}
                                    value={values.Product}
                                    onChange={handleChange("cryoPreservedLeukapheresisLocation")}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu
                                        }
                                    }}
                                    // helperText="Please select your response"
                                    margin="normal"
                                >
                                    {HCP.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>

                        </Grid>

                        </Typography>
                    </form>
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        className={classes.submit}
                        size="medium"
                        onClick={handleSubmit}
                    >
                        Submit
          </Button>
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleCheckClose}
                            aria-labelledby="form-dialog-title"
                            fullWidth={true}
                            maxWidth={'sm'}
                        >
                            <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Inventory capture is successful !
              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCheckClose} color="primary">
                                    Okay
              </Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                </div>
             
            </Paper>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
        </React.Fragment>
    );
}
