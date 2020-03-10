import React, { Component } from 'react';
import { HCPProvider } from '../../../HCPContext';
import ReviewConfirm from './ReviewConfirmNew'
import PatientDetails from './PatientDetails'

import HCPDetails from './HCPdetails'
import PayerDetails from './PayerDetails'

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";



class PatientRequestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: null,
          activeStep : 0,
          prevActiveStep : -1

        };
    }
  

  getSteps() {
    return ['Patient Details', 'Schedule Details', 'Insurer and payment details', 'Review', 'Submit'];
  }

  handleNext = () => {
    this.setState({ prevActiveStep: this.state.prevActiveStep + 1 });
    this.setState({ activeStep: this.state.prevActiveStep });

  };

  handleBack = () => {    
    this.setState({ prevActiveStep: this.state.prevActiveStep - 1 });
    this.setState({ activeStep: this.state.prevActiveStep });

  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  getStepContent(step) {

    switch (step) {
      case 0:
        //return <PatientDetails handleChange={handleChange} values={values}/>
        return <PatientDetails />
      /* case 1:
        //return <HCPDetails  handleChange={handleChange} values={values} />
        return <HCPDetails  />
      case 2:
        //return <PayerDetails  handleChange={handleChange} values={values}/>
        return <PayerDetails  /> */
      case 3:
        //return <ReviewAndConfirm handleChange={handleChange} values={values}/>
        return <ReviewConfirm />
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

  render() {
    let steps = ['Patient Details', 'Schedule Details', 'Insurer and payment details', 'Review', 'Submit'];

    switch (this.state.activeStep) {
      case '0':
         return <PatientDetails /> ;

      case '1':
          return <HCPDetails /> ;
              
      case '2':
          return <PayerDetails /> ;
        
      case '3':
          return <ReviewConfirm /> ;

      default :
         return  <PatientDetails /> ;
    }
  
    
    return (
      <HCPProvider>
        <Container>
        <div className="App">
          <Stepper activeStep={this.state.activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {this.getStepContent(index)}
                <div >
                <Button
                  disabled={this.state.activeStep === 0}
                  onClick={this.handleBack}
                  color="inherit"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                >
                  {this.state.activeStep >= steps.length - 3 ? 'Finish' : 'Next'}
                </Button>
                </div>
              </StepContent>
              </Step>
              ))}
            </Stepper>
          {this.state.activeStep === steps.length && (
            <Paper  square elevation={0} >
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={this.handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
        </Container>
      </HCPProvider>
    );
  }
};

export default PatientRequestForm;