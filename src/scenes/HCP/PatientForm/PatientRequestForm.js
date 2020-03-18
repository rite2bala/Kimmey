import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReviewConfirm from './ReviewConfirmNew';
import PatientDetails from './PatientDetails';
import PayerDetails from './PayerDetails';
import HCPDetails from './HCPdetails';
import useHCPState from './../../../hooks/useHCPState';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  button: {
    top: 50,
    left: 140,
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  root1: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function getSteps() {
  return ['Patient Info', 'HCP Details', 'Payer Details', 'Review & Submit'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Container maxWidth='lg'><PatientDetails /> </Container>;
    case 1:
      return <Container maxWidth='lg'> <HCPDetails /> </Container>;
    case 2:
      return <Container maxWidth='lg'>  <PayerDetails />  </Container>;
    case 3:
      return <Container maxWidth='lg'><ReviewConfirm /> </Container>;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const data = useHCPState();

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);

    console.log("Active Step:", activeStep, steps.length);
    setOpen(true);

    if (activeStep === steps.length - 1) {
      axios.post(`http://localhost:5000/api/patientFormCapture`, { data })
        .then(res => {
          console.log(res.data);
          console.log("Your data here : ", { data })
          // open snackbar to indicate success
        })
        .catch(error => {
          console.log("exception in the post request of Patient Capture form, ", error.response);
          alert("Error in Capture");
        })

    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>

      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Request for Kymriah is submitted !
              Please await and track your status updates visible on the home screen
                <br />
              <br />
              <pre>{JSON.stringify(data, 0, 2)}</pre>

            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
              </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Request for Kymriah placed successfully!
                 </Alert>
            </Snackbar>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>

              </div>
            </div>
          )}
      </div>
    </div>
  );
}
