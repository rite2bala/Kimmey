import React, { useState } from 'react';


const HCPContext = React.createContext([{}, () => { }]);

const HCPProvider = (props) => {

    const [state, setStates] = useState({    
        patientFullName: 'Tina Brown',
        patientAge: '18',
        patientWeight:'50',
        patientIDinHospital: 'P101',

        nameOfHCP: "Dr. XXX YYYY",
        nameOfHCP2: 'Dr. ZZZ YYYY',
        hospitalPONumber: 'Hospital_PO100',
        hospitalContact: "+1-123-456-7890",
        cityofHCP: "Tampa, FL",
        countryofHCP: "USA",

        leukapheresisDate: '01/01/2020',
        leukapheresisLocation: 'HCP, Jersey City',
        cryoPreservedLeukapheresisLocation: 'Cryoport Hub, NJ',
        reinfusionDate: '01/02/2020',
        reinfusionLocation: 'HCP, Jersey City',
    
        payerName: 'Aetna',
        payerApprovalNumber: 'HN100'
    });

    return (
        <HCPContext.Provider value={[state, setStates]}>
            {props.children}
        </HCPContext.Provider>
    );
};


export { HCPContext, HCPProvider };
