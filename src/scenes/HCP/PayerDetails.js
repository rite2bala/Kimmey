import React, { /*Component */} from 'react';
//import Dialog from '@material-ui/core/Dialog';
//import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
//import Button from '@material-ui/core/Button';
//import MenuItem from "@material-ui/core/MenuItem";
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

export default function Patientform() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    Payer_Name: '',
    PayerApprovalNumber: '',
  
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    console.log("Your data here : ", { name })
  };
  var data = values;

  //    const { values, handleChange } = this.props;
  return (
   
      <React.Fragment>
        <CssBaseline />
        <TextField
          label="Payer Name"
          id="Payer_Name"
          className={classes.textField}
          onChange={handleChange("Payer_Name")}
          margin="normal"

        />

        <TextField          
          id="PayePayerApprovalNumberrA"
          placeholder="Optional"
          label="Payer Approval Number"
          className={classes.textField}
          onChange={handleChange("PayerApprovalNumber")}
          margin="normal"
        />

        
        <br />
       
      </React.Fragment>
   
   
  );
}

