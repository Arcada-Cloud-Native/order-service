const decreaseStockCount = order => {

    const rp = require('request-promise');
    //TODO: 
    // warehouse måst ännu fixas
    var url = 'https://inventoryapi.azurewebsites.net/warehouse/1/'+ order.productId;
    console.log(url);
    var options = {
        method: 'PATCH',
        uri: url,
        body: {
            amount: order.productQuantity
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
        console.log("SHIT" + url);
    
}
module.exports = decreaseStockCount;