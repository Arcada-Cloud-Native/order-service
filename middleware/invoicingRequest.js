const invoicingRequest = order => {
    
    const request = require('request');
    //TODO: 
    // floats like 1.00 becomes 1
    var price = order.productPrice;
    console.log(price);
    console.log(typeof(price));
    const request_options = {
        url: 'https://ea42luoqrb.execute-api.eu-west-1.amazonaws.com/v1/invoices',
        method: 'POST',
        json: {
            'firstName': order.firstName,
            'lastName': order.lastName,
            'orderId': order._id,
            'address': order.address,
            'email': order.email,
            'town': order.town,
            'state': order.state,
            'date': order.date,
            'phoneNumber': order.phoneNumber,
            'zipCode': order.zipCode,
            'item': {
                'quantity': order.productQuantity,
                'item': order.productName,
                'price': price
                }
        },
        headers: {
            'Content-Type': 'application/json'
          }
        
    }
    console.log(request_options);

    // Make the API call.
    request(request_options, function(error, response, body) {
    if (error) {
        console.log(error);
        console.log(response);
    } else {
        console.log(body);
    }
    });

    
}

module.exports = invoicingRequest;