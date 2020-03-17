import React, { /*Component */ } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuItem from "@material-ui/core/MenuItem"


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

  const payerList = [
    { value: "Aetna", label: "Aetna" },
    { value: "Bluecross Blueshield", label: "Bluecross Blueshield" },
    { value: "Cigna", label: "Cigna" },
    { value: "Kaiser Permanente", label: "Kaiser Permanente" },
    { value: "United Health Group", label: "United Health Group" },
  ];

  const handleChange = name => event => {
    if (name === "payerName") {
      setpayerName(event.target.value);
    }
    if (name === "payerApprovalNumber") {
      setpayerApprovalNumber(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <TextField
        required
        label="Payer Name"
        id="payerName"
        select

        className={classes.textField}
        value={payerName}
        onChange={handleChange("payerName")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        defaultValue="Aetna"
        margin="normal"
        required
      >
        {payerList.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


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

