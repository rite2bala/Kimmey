import { useContext } from 'react';
import { HCPContext } from './../scenes/HCP/HCPContext';


const useHCPState = () => {
    const [state, setStates] = useContext(HCPContext);

    function setPatientFullName(name) {
        //setStates(state => ({ ...state.patient, patientFullName : name }));
        // console.log("UseState Value", state.patientRequestForm.patient.patientFullName);
        setStates(state => ({
            ...state,
            patient: {
                ...state.patient,
                patientFullName: name
            }

        }));
    }
    //refer to - https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

    function setPatientAge(age) {
        setStates(state => ({
            ...state,
            patient: {
                ...state.patient,
                patientAge: age
            }

        }));
    }

    function setPatientWeight(weight) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                patientWeight: weight
            }

        }));
    }

    function setpatientIDinHospital(hospID) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                patientIDinHospital: hospID
            }

        }));
    }

   
    function setpatientRequestDate(date) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                requestDate: date
            }

        }));
    }

    function setpatientCSC(name) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                csc: name
            }

        }));
    }

    function setpatientRequestStatus(stat) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                status: stat
            }

        }));
    }

    function setpatientRequestSubStatus(stat) {
        setStates(state => ({
            ...state,

            patient: {
                ...state.patient,
                subStatus: stat
            }

        }));
    }

    function setnameOfHCP(HCP) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                nameOfHCP: HCP
            }

        }));
    }

    function setnameOfHCP2(HCP2) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                nameOfHCP2: HCP2
            }

        }));
    }

    function sethospitalContact(contact) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                hospitalContact: contact
            }

        }));
    }

    function setcityofHCP(city) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                cityofHCP: city
            }

        }));
    }

    function setcountryofHCP(country) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                countryofHCP: country
            }

        }));
    }

    function sethospitalPONumber(po) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                hospitalPONumber: po
            }

        }));
    }

    function setleukapheresisDate(leukdate) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                leukapheresisDate: leukdate
            }

        }));
    }

    function setleukapheresisLocation(leukLok) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                leukapheresisLocation: leukLok
            }

        }));
    }

    function setcryoPreservedLeukapheresisLocation(cryoLoc) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                cryoPreservedLeukapheresisLocation: cryoLoc
            }

        }));
    }

    function setreinfusionLocation(reinfloc) {
        setStates(state => ({
            ...state,

            hcp: {
                ...state.hcp,
                reinfusionLocation: reinfloc
            }

        }));
    }

    


    function setpayerName(payerN) {
        setStates(state => ({
            ...state,

            payer: {
                ...state.payer,
                payerName: payerN
            }

        }));
    }

    function setpayerApprovalNumber(payerAp) {
        setStates(state => ({
            ...state,

            payer: {
                ...state.payer,
                payerApprovalNumber: payerAp
            }

        }));
    }

    function setHcpPatientForms(forms) {
        setStates(state => ({
            ...state,
            hcpPatientForms: forms
        }));
    }

    return {
        patient: state.patient,
        hcp: state.hcp,
        payer: state.payer,
        hcpPatientForms: state.hcpPatientForms,
        setPatientFullName,
        setPatientAge,
        setPatientWeight,
        setpatientIDinHospital,
        setpatientRequestDate,
        setpatientCSC,
        setpatientRequestStatus,
        setpatientRequestSubStatus,
        setnameOfHCP,
        setnameOfHCP2,
        sethospitalPONumber,
        sethospitalContact,
        setcityofHCP,
        setcountryofHCP,
        setleukapheresisDate,
        setleukapheresisLocation,
        setcryoPreservedLeukapheresisLocation,
        setreinfusionLocation,
        setpayerName,
        setpayerApprovalNumber,
        setHcpPatientForms
    }
};

export default useHCPState;