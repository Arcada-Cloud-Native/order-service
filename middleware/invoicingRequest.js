const invoicingRequest = order => {
    const rp = require('request-promise');
    //TODO: 
    // floats like 1.00 becomes 1
    
    var options = {
        method: 'POST',
        uri: 'https://ea42luoqrb.execute-api.eu-west-1.amazonaws.com/v1/invoices',
        body: {
            firstName: order.firstName,
            lastName: order.lastName,
            orderId: order._id,
            address: order.address,
            email: order.email,
            town: order.town,
            state: order.state,
            date: order.date,
            phoneNumber: order.phoneNumber,
            zipCode: order.zipCode,
            item: {
                quantity: order.productQuantity,
                item: order.productName,
                price: order.productPrice
                }
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

module.exports = invoicingRequest;