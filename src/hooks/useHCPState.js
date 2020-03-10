import { useContext } from 'react';
import { HCPContext } from './../scenes/HCP/HCPContext'; 


const useHCPState = () => {
    const [state, setStates] = useContext(HCPContext);
    
    function setPatientFullName(name) {
        setStates(state => ({ ...state, patientFullName: name }));
        console.log("UseState Value", state.patientFullName );
    }

    function setPatientAge(age) {
        setStates(state => ({ ...state, patientAge: age }));
    }

    function setPatientWeight(weight) {
        setStates(state => ({ ...state, patientWeight: weight }));
    }

    return {
      patientFullName : state.patientFullName,
      setPatientFullName,
      /*
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
      payerApprovalNumber: ''*/
        
    }
};

export default useHCPState;