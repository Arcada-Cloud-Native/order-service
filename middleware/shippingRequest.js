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

    const rp = require('request-promise');
    //TODO: 
    // floats like 1.00 becomes 1
    const data = JSON.stringify({
        todo: 'Buy the milk'
      })
    var options = {
        method: 'POST',
        uri: 'https://beansshipping.herokuapp.com/orders',
        body: {
            orderId: order._id,
            firstName: order.firstName,
            lastName: order.lastName,
            address: order.address,
            email: order.email,
            town: order.town,
            state: order.state,
            date: order.date,
            phoneNumber: order.phoneNumber,
            zipCode: order.zipCode,
            shipping: order.shipping
        },
        json: true // Automatically stringifies the body to JSON
        
    };
    console.log(options.body)
    rp(options)
        .then(function (parsedBody) {
            // POST succeeded...
        })
        .catch(function (err) {
            // POST failed...
            console.error(err)
        });

}

module.exports = shippingRequest;
