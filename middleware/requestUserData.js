const request = require("request");
const rp = require("request-promise");
const handleError = require("./handleError");
const http = require('http');


const requestUserData = async (userId, userAuth) => {

  const options = {
    uri: "https://beanhats-user-service.azurewebsites.net/api/users/"+ userId ,
    headers: {
      "Authorization": userAuth
    },
    json: true // Automatically parses the JSON string in the response
  };


    return rp(options)
};
    


module.exports = requestUserData;
