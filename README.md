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
- userId {type: String, required: true},
- firstName {type: String, required: true},
- lastName {type: String, required: true},
- email {type: String, required: true},
- address {type: String, required: true},
- town {type: String, required: true},
- state {type: String, required: true}
- date {type: Date, require: true}
- phoneNumber {type: String, required: true}
- zipCode {type: Number, required: true}
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
content-type: application/json


{
    "userId": "1",
    "firstName": "Test",
    "lastName": "Man",
    "email": "testman@test.com",
    "address": "Test avenue 31",
    "town": "testville",
    "state": "state of test",
    "date": "2021-03-03T16:37:04.648Z",
    "phoneNumber": "+369 123 5346",
    "zipCode": 13269,
    "productId": "603ce74bf5237474e806355",
    "productSku": "bea-55-gre",
    "productName": "hat",
    "productSize": 10,
    "productPrice": 10.1,
    "productQuantity": 1,
    "warehouse": "3",
    "shipping": "UPS",
}
```
