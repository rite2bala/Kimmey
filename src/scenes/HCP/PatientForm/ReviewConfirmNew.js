import React /*Component */ from "react";
import { makeStyles } from "@material-ui/core/styles";
import useHCPState from './../../../hooks/useHCPState';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Typography from "material-ui/styles/typography";
import Paper from '@material-ui/core/Paper';


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


export default function ReviewAndConfirm(value, handleChanges ) {
  const classes = useStyles();

  const {patientFullName, setPatientFullName} = useHCPState();
  console.log("Patient Confirm Value", patientFullName);

  return (
   <React.Fragment>
    <List>
      <ListItem>
        <ListItemText primary="Patient Full Name" secondary={patientFullName} />
      </ListItem>
    </List>
  </React.Fragment>
 
  );
}
