const decreaseStockCount = order => {

    const rp = require('request-promise');
    //TODO: 

    var url = 'https://inventoryapi.azurewebsites.net/warehouse/' + order.warehouse + '/'+ order.productSku;
    console.log(url);
    var options = {
        method: 'PATCH',
        uri: url,
        body: {
            amount: (order.productQuantity * -1),
            SKU: order.productSku
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
module.exports = decreaseStockCount;