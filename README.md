# Order Service
Order microservice for the Arcada Cloud Native Apps course e-commerce store
## Routes
https://beanorder.azurewebsites.net/orders
- /orders
  - GET - returns a list of all orders
  - POST - creates an order
- /orders/:id
	- GET - returns a specific order
- /orders/user/:userId"
	- GET - returns specific users orders
- /orders/user/:userId/:id"
	- GET - returns specific users order
- /orders/:id
	- DELETE - deletes a specific order
### POST
Use the JSON Web Token from user login as Authorization in header of POST request.
- userId {type: String, required: true},
- productId: {type: String, required: true},
- productSku: {type: String, required: true},
- productName: { type: String, required: true }
- productSize: { type: Number, required: true }
- productColor: { type: String, required: true }
- productQuantity: { type: Number, required: true }
- productPrice: { type: Number, required: true }
- warehouse: {type: String, required: true}
- shipping {type: String, required: true, enum: ["DHL", "Posti", "UPS", "PostNord", "DPD", "TNT", "Bring", "Matkahuolto", "BudBee"]}

## Examples
### Get a specific invoice
GET https://beanorder.azurewebsites.net/orders/1614789424648

### Create a new invoice
```
POST GET https://beanorder.azurewebsites.net/orders
headers: {
      "Authorization": "JSONWebToken"
    },
content-type: application/json


{
    "userId": "6044e754676dce0021522950",
    "productId": "603ce74bf5237474e8063553",
    "productSku": "bea-53-red",
    "productName": "beanie_red",
    "productSize": 53,
    "productColor": "red",
    "productPrice": 20.00,
    "productQuantity": 1,
    "warehouse": "1",
    "shipping": "Posti"
}
```
