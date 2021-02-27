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
