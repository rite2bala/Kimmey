'use strict';

const queryContract = async function (requestData, config) {
  let message;

  try {
    axios.post(`http://localhost:7575/v1/query`, requestData, config)
    .then(res => {
      message = res.data;
      console.log("Query output::", message);
    })
    .catch(error => {
      console.log("exception in the query Patient forms, ", error.response);
     // alert("Error in Capture");
    }) 
  } catch (error) {
  }

  return message;
};

exports.queryContract = queryContract;