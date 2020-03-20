'use strict';

const createContract = async function (requestData, config) {
  let message;
  try {
    axios.post(`http://localhost:7575/v1/create`, requestData, config)
      .then(res => {
        console.log("request capture:: ", res.data);
        message = res.data;
      })
      .catch(error => {
        console.log("exception in the post request of Patient Capture form, ", error.response);
        alert("Error in Capture");
      })
  } catch (error) {
  }

  return "Success";
};

exports.createContract = createContract;