import React, { /*Component */ } from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
//import Button from '@material-ui/core/Button';
//import MenuItem from "@material-ui/core/MenuItem";
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

export default function PayerDetails() {
  const classes = useStyles();

  const {
    payerApprovalNumber, setpayerApprovalNumber, payerName, setpayerName } = useHCPState();

  const handleChange = name => event => {
    // setValues({ ...values, [name]: event.target.value });
    // console.log("Your data here : ", { name })
    if (name === "payerName") {
      setpayerName(event.target.value);
    }
    if (name === "payerApprovalNumber") {
      setpayerApprovalNumber(event.target.value);
    }
  };
//  var data = values;
  
  //    const { values, handleChange } = this.props;
  return (

    <React.Fragment>
      <CssBaseline />
      <TextField
        label="Payer Name"
        id="payerName"
        className={classes.textField}
        onChange={handleChange("payerName")}
        margin="normal"
        value={payerName}
      />

      <TextField
        id="payerApprovalNumber"
        placeholder="Optional"
        label="Payer Approval Number"
        className={classes.textField}
        onChange={handleChange("payerApprovalNumber")}
        margin="normal"
        value={payerApprovalNumber}
      />
      <br />
    </React.Fragment>


  );
}

