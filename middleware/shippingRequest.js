const shippingRequest = order => {
    const shippingReq = {
        "orderId": order._id,
        "firstName": order.firstName,
        "lastName": order.lastName,
        "address": order.address,
        "email": order.email,
        "town": order.town,
        "state": order.state,
        "date": order.date,
        "phoneNumber": order.phoneNumber,
        "zipCode": order.zipCode,
        "shipping": "Posti"
    }

    //TODO:
    // Skicka shippingReq-objektet till shipping API i POST req

    function SendRequest(shippingReq) {
        function OnResponse(response) {
            var data = '';

            response.on('data', function(chunk) {
                data += chunk; //Append each chunk of data received to this variable.
            });
            response.on('end', function() {
                console.log(data); //Display the server's response, if any.
            });
        }

        var request = http.request(urlparams, OnResponse); //Create a request object.

        request.write(shippingReq); //Send off the request.
        request.end(); //End the request.
        }
        /*
        var urlparams = {
            host: 'plop.requestcatcher.com', //No need to include 'http://' or 'www.'
            port: 80,
            path: '/test',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //Specifying to the server that we are sending JSON
            }
        };
        */
}

module.exports = shippingRequest;
