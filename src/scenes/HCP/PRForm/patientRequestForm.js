import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

import HCPDetails from './HCPdetails'
import PayerDetails from './PayerDetails'
import ReviewAndConfirm from './ReviewandConfirm'
import SuccessfulSubmit from './successfulSubmit'
import PatientDetails from './PatientDetails'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(3),
    size: "small"
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  
}));


function getSteps() {
  return ['Patient Details', 'HCP & Kymriah Schedule Details', 'Insurer and payment details', 'Review before submit', 'Successful Submit'];
}



function getStepContent(step, handleChange, values) {
  switch (step) {
    case 0:
      return <PatientDetails handleChange={handleChange} values={values}/>
    case 1:
      return <HCPDetails  handleChange={handleChange} values={values} />
    case 2:
      return <PayerDetails  handleChange={handleChange} values={values}/>
    case 3:
      return <ReviewAndConfirm handleChange={handleChange} values={values}/>
    case 4:
      return  ( <div>
        <h1>Thank You For Your Submission</h1>
          <h4>You will get an email with further instructions</h4>
          </div>)
    default:
      return <h1>Error 404.Page Not Found.
        We agree, something awesome could have been there, but unfortunately not!</h1>;
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    patientFullName: '',
    patientAge: '',
    patientWeight:'',
    patientIDinHospital: '',
    
    nameOfHCP: "",
    nameOfHCP2: '',
    hospitalPONumer: '',
    hospitalContact: "",
    cityofHCP: "",

    leukapheresisDate: '',
    leukapheresisLocation: '',
    cryoPreservedLeukapheresisLocation: '',
    reinfusionLocation: '',
    
    payer_Name: '',
    payerApprovalNumber: ''});

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };

  
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index, handleChange, values)}</Typography>
                <div className={classes.actionsContainer}>

                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                    color="inherit"
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep >= steps.length - 2 ? 'Finish' : 'Next'}
                  </Button>

                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
          </Button>
          </Paper>
        )}
        
      </div>

    </Container>
  );
}
