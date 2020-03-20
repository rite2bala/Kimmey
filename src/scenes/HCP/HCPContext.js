import React, { useState } from 'react';


const HCPContext = React.createContext([{}, () => { }]);

const HCPProvider = (props) => {

    const [state, setStates] = useState({
        patient: {
            patientFullName: 'Tina Brown',
            patientAge: '18',
            patientWeight: '50',
            requestDate: '2020-01-01',
            csc : "csc",
            status : 'Request',
            subStatus : 'Initiated',
            patientIDinHospital: 'P101',
        },
        hcp: {
            nameOfHCP: "Alice",
            nameOfHCP2: 'Dr ZZZ YYYY',
            hospitalPONumber: 'Hospital_PO100',
            hospitalContact: "+1-123-456-7890",
            cityofHCP: "Tampa, FL",
            countryofHCP: "USA",
            leukapheresisDate: '2020-01-01',
            leukapheresisLocation: 'HCP, Jersey City',
            cryoPreservedLeukapheresisLocation: 'Cryoport Hub, NJ',
            reinfusionLocation: 'HCP, Jersey City',
            site: "test",
        }, 
        payer: {
            payerName: 'Aetna',
            payerApprovalNumber: 'HN100'
        },
        hcpPatientForms : "",


    });



    return (
        <HCPContext.Provider value={[state, setStates]}>
            {props.children}
        </HCPContext.Provider>
    );
};


export { HCPContext, HCPProvider };
