const express = require('express');
const app = express();
const { json } = require('body-parser');
const cors = require('cors');
const port = 5000;
const create = require("./app/damlCreate.js");
const query = require("./app/damlQuery.js");

console.log("=====================>>> We are in server JS !!!!!!!")

const axios = require('axios');

app.use(json());
app.use(cors());

//Newly added lines
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
//Newly added lines end.

app.get('/', (req, res) => res.send('Hello World!'))


app.post(`/api/patientFormCapture`, (req, res) => {
  const inputData = JSON.stringify(req.body);
  console.log("InputData::", inputData);
  let inputJSON = JSON.parse(inputData);
  
  let newRequestJSON = {
    hcp: undefined,
    hcpDemographics: {
      nameOfHospital: undefined,
      hospitalPONumber: undefined,
      hospitalContact: undefined,
      hcpCity: undefined,
      patientIDinHospital: undefined
    },
    patient: {
      patientFullName : undefined,
      patientAge : undefined,
      patientWeight : undefined
    },
    payer: undefined,
    payerDetails : {
      payerApprovalNumber: undefined
    },
    csc : undefined,
    site : undefined,
    apheresisCenter : {
      leukapheresisDate: undefined,
      leukapheresisLocation: undefined,
      cryoPreservedLeukapheresisLocation: undefined,
      reinfusionLocation: undefined
    },
    requestDate : undefined,
    status : undefined
  };

  //let newJson = JSON.parse(newRequestJSON);
  newRequestJSON.hcp = inputJSON.hcp.nameOfHCP;
  newRequestJSON.hcpDemographics.nameOfHospital = inputJSON.hcp.nameOfHCP
  newRequestJSON.hcpDemographics.hospitalPONumber = inputJSON.hcp.hospitalPONumber
  newRequestJSON.hcpDemographics.hospitalContact = inputJSON.hcp.hospitalContact
  newRequestJSON.hcpDemographics.hcpCity = inputJSON.hcp.cityofHCP
  newRequestJSON.patient.patientFullName = inputJSON.patient.patientFullName;
  newRequestJSON.patient.patientAge = inputJSON.patient.patientAge;
  newRequestJSON.patient.patientWeight = inputJSON.patient.patientWeight;
  newRequestJSON.patient.patientIDinHospital = inputJSON.patient.patientIDinHospital;
  newRequestJSON.payer = inputJSON.payer.payerName;
  newRequestJSON.payerDetails.payerApprovalNumber = inputJSON.payer.payerApprovalNumber;
  newRequestJSON.csc = inputJSON.patient.csc;
  newRequestJSON.site = inputJSON.hcp.site;
  newRequestJSON.apheresisCenter.leukapheresisDate = inputJSON.hcp.leukapheresisDate;
  newRequestJSON.apheresisCenter.leukapheresisLocation = inputJSON.hcp.leukapheresisDate;
  newRequestJSON.apheresisCenter.cryoPreservedLeukapheresisLocation = inputJSON.hcp.cryoPreservedLeukapheresisLocation;
  newRequestJSON.apheresisCenter.reinfusionLocation = inputJSON.hcp.reinfusionLocation;
  newRequestJSON.requestDate = inputJSON.patient.requestDate ;
  newRequestJSON.status = inputJSON.patient.status;
  newRequestJSON.subStatus = inputJSON.patient.subStatus;

  //newRequestJSON.patient.push({"patientFullName" : inputJSON.data.patientFullName });
  console.log("new JSON ::", JSON.stringify(newRequestJSON));
  requestData = '{ "templateId": "SupplyChain.PatientRequestForm:PatientRequestForm","payload":'+ JSON.stringify(newRequestJSON) +'}' 
  console.log("new Request JSON ::", requestData);
  let varToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJLeW1yaWFoU3VwcGx5Q2hhaW4iLCJhcHBsaWNhdGlvbklkIjoiSFRUUC1KU09OLUFQSS1HYXRld2F5IiwiYWN0QXMiOlsiQWxpY2UiXX19.RXc7uiQFs4Mn1AZGeRnzFlfNsgmUnzwzmEZ2PDZ_R50";
  let config = {
    headers: {
      Authorization: 'Bearer ' + varToken
    }
  }
/* 
  let message = create.createContract(requestData, config);
  console.log("message::", message);
  res.send(message); */
  
  axios.post(`http://localhost:7575/v1/create`, requestData, config)
    .then(res => {
      console.log("request capture:: ",res.data);
    })
    .catch(error => {
      console.log("exception in the post request of Patient Capture form, ", error.response);
    })  
});

app.post(`/api/patientFormQuery`, (req1, res1) => {
  
  const inputData = req1.body.requestData;
  const forms = "";
  //requestData = '{"templateIds" : ["SupplyChain.PatientRequestForm:PatientRequestForm"], "query": {"hcp":"Alice"}}' 
  requestData = '{"templateIds" : ["SupplyChain.PatientRequestForm:PatientRequestForm"], "query":' + JSON.stringify(inputData) +'}' 
  console.log("QUERY STRING::", requestData);
  let varToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJLeW1yaWFoU3VwcGx5Q2hhaW4iLCJhcHBsaWNhdGlvbklkIjoiSFRUUC1KU09OLUFQSS1HYXRld2F5IiwiYWN0QXMiOlsiQWxpY2UiXX19.RXc7uiQFs4Mn1AZGeRnzFlfNsgmUnzwzmEZ2PDZ_R50";
  let config = {
    headers: {
      Authorization: 'Bearer ' + varToken
    }
  }

  //let message = query.queryContract(requestData, config)
  
   axios.post(`http://localhost:7575/v1/query`, requestData, config)
    .then(res => {
      console.log("server out::", JSON.stringify(res.data));
      res1.send(res.data);
    })
    .catch(error => {
      console.log("exception in the query Patient forms, ", error.response);
     // alert("Error in Capture");
    })  

});


app.listen(port, () => console.log(`Server started on port ${port}`));

