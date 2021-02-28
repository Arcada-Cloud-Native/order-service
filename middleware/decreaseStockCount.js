const decreaseStockCount = result => {
    const shippingReq = {
        "productId": order.productId,
        
        
    }
    // TODO
    // Skicka post req till product och minska stock för produkten i ordern med x
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

module.exports = decreaseStockCount;