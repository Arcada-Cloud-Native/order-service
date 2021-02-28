const invoicingRequest = order => {
    const rp = require('request-promise');
    //TODO: 
    // floats like 1.00 becomes 1
    const data = JSON.stringify({
        todo: 'Buy the milk'
      })
    var options = {
        method: 'POST',
        uri: 'https://ea42luoqrb.execute-api.eu-west-1.amazonaws.com/v1/invoices',
        body: {
            firstName: "John",
            lastName: "Smith",
            orderId: 5,
            address: "Aleksanterinkatu 11",
            email: "john@example.com",
            town: "Helsinki",
            state: "Uusimaa",
            date: "2021-07-21T17:32:28Z",
            phoneNumber: "+358 40 5723315",
            zipCode: "00100",
            item: {
                quantity: 2,
                item: "Big Bean Burrito",
                price: 30.05
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