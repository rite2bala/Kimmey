import React, { useState } from 'react';


const MapContext = React.createContext([{}, () => { }]);

const MapProvider = (props) => {

    const [state, setStates] = useState({
        stateFlag: null,
        inventory_rows: [],
        map_rows: [],
    
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
        <MapContext.Provider value={[state, setStates]}>
            {props.children}
        </MapContext.Provider>
    );
};


export { MapContext, MapProvider };
