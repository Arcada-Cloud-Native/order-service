const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const orderRoutes = require('./routes/orders');

const password = 'Zr66y9p2Ycc3tAK';
const db = 'orderservice';

//Connect to database
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://test:'+password+'@orders.gdmgk.mongodb.net/'+db+'?retryWrites=true&w=majority');



//incomming requests are logged in console
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false }));

//Automatic parsing of JSON-objects.
app.use(bodyParser.json());


app.use('/orders', orderRoutes);


app.use((req, res, next) => {
    //Creates new Error-object"
    const error = new Error("Requested resource not found! Supported resources are /orders");
    error.status = 404;
    
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        status: error.status,
        error: error.message
    });
});

module.exports = app;