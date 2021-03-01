const request = require("request");
const rp = require("request-promise");
const handleError = require("./handleError");
const http = require('http')


const requestUserData = async userId => {

    const options = {
      uri: "http://localhost:8081/users" ,
      headers: {
        "User-Agent": "Request-Promise"
      },
      json: true // Automatically parses the JSON string in the response
    };

    return rp(options)
};

module.exports = requestUserData;
