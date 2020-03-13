import { useContext } from 'react';
import { HCPContext } from './../scenes/HCP/HCPContext';


const useHCPState = () => {
    const [state, setStates] = useContext(HCPContext);

    function setPatientFullName(name) {
        setStates(state => ({ ...state, patientFullName: name }));
        console.log("UseState Value", state.patientFullName);
    }

    function setPatientAge(age) {
        setStates(state => ({ ...state, patientAge: age }));
    }

    function setPatientWeight(weight) {
        setStates(state => ({ ...state, patientWeight: weight }));
    }
    function setpatientIDinHospital(hospID) {
        setStates(state => ({ ...state, patientIDinHospital: hospID }));
    }
    function setnameOfHCP(HCP) {
        setStates(state => ({ ...state, nameOfHCP: HCP }));
    }
    function setnameOfHCP2(HCP2) {
        setStates(state => ({ ...state, nameOfHCP2: HCP2 }));
    }
  
    function sethospitalContact(contact) {
        setStates(state => ({ ...state, hospitalContact: contact }));
    }
    function setcityofHCP(city) {
        setStates(state => ({ ...state, cityofHCP: city }));
    }
    
    function sethospitalPONumber(po) {
        setStates(state => ({ ...state, hospitalPONumber: po }));
    }

    function setleukapheresisDate(leukdate) {
        setStates(state => ({ ...state, leukapheresisDate: leukdate }));
    }
    function setleukapheresisLocation(leukLok) {
        setStates(state => ({ ...state, leukapheresisLocation: leukLok }));
    }
    function setcryoPreservedLeukapheresisLocation(cryoLoc) {
        setStates(state => ({ ...state, cryoPreservedLeukapheresisLocation: cryoLoc })
        )
    }
    function setreinfusionLocation(reinfloc) {
        setStates(state => ({ ...state, reinfusionLocation: reinfloc })
        )
    }
    function setpayerName(payerN) {
        setStates(state => ({ ...state, payerName: payerN })
        )
    }
    function setpayerApprovalNumber(payerAp) {
        setStates(state => ({ ...state, payerApprovalNumber: payerAp })
        )
    }
    return {
        patientFullName: state.patientFullName,
        setPatientFullName,

        patientAge: state.patientAge,
        setPatientAge,

        patientWeight: state.patientWeight,
        setPatientWeight,

        patientIDinHospital: state.patientIDinHospital,
        setpatientIDinHospital,

        nameOfHCP: state.nameOfHCP,
        setnameOfHCP,

        nameOfHCP2: state.nameOfHCP2,
        setnameOfHCP2,

        hospitalPONumber: state.hospitalPONumber,
        sethospitalPONumber,

        hospitalContact: state.hospitalContact,
        sethospitalContact,

        cityofHCP: state.cityofHCP,
        setcityofHCP,

        leukapheresisDate: state.leukapheresisDate,
        setleukapheresisDate,

        leukapheresisLocation: state.leukapheresisLocation,
        setleukapheresisLocation,

        cryoPreservedLeukapheresisLocation: state.cryoPreservedLeukapheresisLocation,
        setcryoPreservedLeukapheresisLocation,

        reinfusionLocation: state.reinfusionLocation,
        setreinfusionLocation,

        payerName: state.payerName,
        setpayerName,

        payerApprovalNumber: state.payerApprovalNumber,
        setpayerApprovalNumber,
        
    }
};

export default useHCPState;