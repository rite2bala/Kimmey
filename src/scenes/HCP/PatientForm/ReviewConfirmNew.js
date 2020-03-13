import React /*Component */ from "react";
import { makeStyles } from "@material-ui/core/styles";
import useHCPState from './../../../hooks/useHCPState';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid"
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  grid: {

    alignContent: "center",
    direction: "column",
    justify: "center",
    alignItems: "flex-start",
    color: theme.palette.text.secondary
  },
  container: {
    fontFamily: '"Fira Sans"',
    display: "flex",
    flexWrap: "wrap",
    height: "75%"
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


export default function ReviewAndConfirm(value, handleChanges) {
  const classes = useStyles();

  const { patientFullName, patientWeight, hospitalPONumber, nameOfHCP2, hospitalContact, cityofHCP, leukapheresisDate,
    leukapheresisLocation, cryoPreservedLeukapheresisLocation,
    reinfusionLocation, payerName, payerApprovalNumber,
    nameOfHCP, patientIDinHospital, patientAge } = useHCPState();

const values = useHCPState();

  return (
<React.Fragment>
  <CssBaseline/>
    <Paper >
     
        <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={6}>
          <div>
            <List>
              <ListItem>
                <ListItemText primary="Patient Full Name: " secondary={patientFullName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Patient Age: " secondary={patientAge} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Patient Weight: " secondary={patientWeight} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Patient Hospital ID: " secondary={patientIDinHospital} />
              </ListItem>
            
            </List>
          </div>
        </Grid>
        <Grid item xs={6}>
          <List>
          <ListItem>
              <ListItemText primary="Name of HCP 1: " secondary={nameOfHCP} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Name of HCP 2: " secondary={nameOfHCP2} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Hospital PO Number: " secondary={hospitalPONumber} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City of Hospital: " secondary={cityofHCP} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Contact in hospital: " secondary={hospitalContact} />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={6}>
          <List>
            <ListItem>
              <ListItemText primary="Leukapheresis Date: " secondary={leukapheresisDate} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Leukapheresis Location: " secondary={leukapheresisLocation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cryo-preserved Leukapheresis Location: " secondary={cryoPreservedLeukapheresisLocation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reinfusion Location: " secondary={reinfusionLocation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="payerName: " secondary={payerName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Payer Approval Number: " secondary={payerApprovalNumber} />
            </ListItem>

          </List>
        </Grid>
      </Grid>
    </Paper>
    <pre>{JSON.stringify(values, 0, 2)}</pre>    
    </React.Fragment>

  );
}
