const express = require('express');
const app = express();
const { json } = require('body-parser');
const cors = require('cors');
const port = 5000;
const JSONStream = require('JSONStream')
console.log("=====================>>> We are in server JS !!!!!!!")
// const invoke = require("./app/invoke-transaction");
// const query = require("./app/query");
// const helper = require("./app/helper.js");
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
  let newRequestJSON = new Object()  
  let newJSON = new Object()

  //newJSON.key = "PatientDemographics"
  newJSON["hcp"] = inputJSON.data.nameOfHCP;
  newJSON["patient"] = '{"patientFullName": "' + inputJSON.data.patientFullName +  '","patientAge": "' + inputJSON.data.patientAge + 
  '","patientWeight": "' + inputJSON.data.patientWeight + '"}';
  newJSON["payer"] = '"' + inputJSON.data.payerName + '"';
  newJSON["payerDetails"] = '{"payerApprovalNumber": "' + inputJSON.data.payerApprovalNumber + '"}';
  newJSON["site"] = "Site_user";
  newJSON["hcpDemographics"] = '{"nameOfHospital": "' + inputJSON.data.nameOfHCP +  '","hospitalPONumber": "' + inputJSON.data.hospitalPONumber + 
  '","hospitalContact": "' + inputJSON.data.hospitalContact + '","hcpCity": "' + inputJSON.data.cityofHCP + '","patientDINHospital": "' + inputJSON.data.patientIDinHospital + 
  '"}';
  newJSON["apheresisCenter"] = '{"leukapheresisDate": "' + inputJSON.data.leukapheresisDate + '","leukapheresisLocation": "' + inputJSON.data.leukapheresisLocation + '","cryoPreservedLeukapheresisLocation": "' + inputJSON.data.cryoPreservedLeukapheresisLocation
  + '","reinfusionDate": "' + inputJSON.data.reinfusionDate + '","reinfusionLocation": "' + inputJSON.data.reinfusionLocation
  + '"}';
  newJSON["requestDate"] = inputJSON.data.requestDate;
  newJSON["status"] = "pending";

//  requestData = '{ "templateId": "PatientRequestForm:PatientRequestForm","payload":'+ JSON.stringify(JSON.parse(inputData).data) +'}' 
 // console.log("Request Data::", requestData);
  newRequestJSON["templateId"] = "SupplyChain:PatientRequestForm:PatientRequestForm";
  newRequestJSON["payload"] = newJSON;
  console.log("new Request JSON ::", newRequestJSON);

  //let varToken = '{"https://daml.com/ledger-api": {"ledgerId": "KymriahSupplyChain", "applicationId": "HTTP-JSON-API-Gateway", "actAs": ["Alice"]}} eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJNeUxlZGdlciIsImFwcGxpY2F0aW9uSWQiOiJmb29iYXIiLCJhY3RBcyI6WyJBbGljZSJdfX0.VdDI96mw5hrfM5ZNxLyetSVwcD7XtLT4dIdHIOa9lcU';
  let varToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJLeW1yaWFoU3VwcGx5Q2hhaW4iLCJhcHBsaWNhdGlvbklkIjoiSFRUUC1KU09OLUFQSS1HYXRld2F5IiwiYWN0QXMiOlsiQWxpY2UiXX19.RXc7uiQFs4Mn1AZGeRnzFlfNsgmUnzwzmEZ2PDZ_R50";
  let config = {
    headers: {
      Authorization: 'Bearer ' + varToken
    }
  }
  axios.post(`http://localhost:7575/v1/create`, newRequestJSON , config)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log("exception in the post request of Patient Capture form, ", error.response);
      alert("Error in Capture");
    }) 
    res.send(res.data);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

