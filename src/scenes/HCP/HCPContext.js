import React, { useState } from 'react';


const HCPContext = React.createContext([{}, () => { }]);

const HCPProvider = (props) => {

    const [state, setStates] = useState({    
        patientFullName: '',
        patientAge: '',
        patinetWeight:'',
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
        
        payerName: '',
        payerApprovalNumber: ''
    });

    return (
        <HCPContext.Provider value={[state, setStates]}>
            {props.children}
        </HCPContext.Provider>
    );
};


export { HCPContext, HCPProvider };
