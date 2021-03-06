import React /*Component */ from "react";
import { makeStyles } from "@material-ui/core/styles";
import useHCPState from './../../../hooks/useHCPState';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from "@material-ui/core/Typography"
const useStyles = makeStyles(theme => ({
  grid: {
    alignItems: "flex-start",
    direction: "column",
    justify: "center",
    alignItems: "flex-start",
    color: theme.palette.text.secondary
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

  const { patient, hcp, payer } = useHCPState();

  //const values = useHCPState();
  //   <Typography color="textPrimary" component="p">
  //   <b>Age:</b> {patientAge}, <b>Weight:</b>
  //   {patientWeight}
  // </Typography>
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid className={classes.grid} container spacing={3}>

        <Grid item xs={3}>
          <Typography color="textSecondary" variant='h5' component="p"> <b>Patient Details </b> </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography color="textSecondary" variant='h5' component="p"> <b>HCP Details </b> </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography color="textSecondary" variant='h5' component="p"> <b>Leukapheresis Center </b> </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography color="textSecondary" variant='h5' component="p"> <b>Payer Details </b> </Typography>
        </Grid>


        <Grid item xs={3}>
          <div>
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>  Name: </b> {patient.patientFullName} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>  Age:  </b> {patient.patientAge} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p">  <b>  Weight:   </b>{patient.patientWeight} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p">  <b>  Hospital ID:  </b> {patient.patientIDinHospital} </Typography>

          </div>
        </Grid>

        <Grid item xs={3}>
          <div>
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> HCP Name: </b> {hcp.nameOfHCP} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> Second HCP Name: </b> {hcp.nameOfHCP2} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> City: </b> {hcp.cityofHCP} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> Contact: </b> {hcp.hospitalContact} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> Hospital PO Number: </b> {hcp.hospitalPONumber} </Typography>

          </div>
        </Grid>

        <Grid item xs={3}>
          <div>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>Leukapheresis Date: </b> {hcp.leukapheresisDate} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>Leukapheresis Location:  </b> {hcp.leukapheresisLocation} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>Cryo-preserved Location: </b> {hcp.cryoPreservedLeukapheresisLocation} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b> Reinfusion Location: </b> {hcp.reinfusionLocation} </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p">  <b>Payer Name:</b>   {payer.payerName} </Typography>
            <br />
            <Typography color="textPrimary" variant='subtitle' component="p"> <b>Payer Approval Number:</b>  {payer.payerApprovalNumber} </Typography>
          </div>
        </Grid>
      </Grid>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </React.Fragment>

  );
}
