
import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';


export class Confirm extends Component {

  render() {
    const {
      values: { patientFullName, patientAge, patientWeight, patientIDInHospital, NameOfHCP, NameOfHCP2,hospitalPONumer, HospitalContact,payerName,payerApprovalNumber,leukapheresisLocation,reinfusionDate,reinfusionLocation,leukapheresisDate,cryoPreservedLeukapheresisLocation}
    } = this.props;
    return (

      <React.Fragment>
        <List>
          <h3>Patient Details</h3>
          <ListItem>
            <ListItemText primary="Patient Full Name" secondary={patientFullName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Patient Age" secondary={patientAge} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Patient Age" secondary={patientWeight} />
          </ListItem>

          <ListItem>
            <ListItemText primary="Patient ID In Hospital" secondary={patientIDInHospital} />
          </ListItem>
          <br/>
          <h3>HCP Details</h3>
          
          <ListItem>
            <ListItemText primary="Name Of HCP" secondary={NameOfHCP} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Name of HCP 2" secondary={NameOfHCP2} />
          </ListItem>
          <ListItem>
            <ListItemText primary=" PO from Hospital" secondary={hospitalPONumer} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hospital Contact" secondary={HospitalContact} />
          </ListItem>
         
          <ListItem>
            <ListItemText primary="Leukapheresis Date " secondary={leukapheresisDate} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Leukapheresis Location " secondary={leukapheresisLocation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="CryoPreserved Leukapheresis Location " secondary={cryoPreservedLeukapheresisLocation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reinfusion Date " secondary={reinfusionDate} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reinfusion Location " secondary={reinfusionLocation} />
          </ListItem>

          <br/>
          <h3>Payer Details</h3>
          <ListItem>
            <ListItemText primary="Payer Name " secondary={payerName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Payer Approval Number" secondary={payerApprovalNumber} />
          </ListItem>
          
        </List>
        <br />
      </React.Fragment>

    );
  }


}

export default Confirm;