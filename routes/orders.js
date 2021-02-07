const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Order = require('../models/order');



//eventlistener for GET requests
router.get('/', (req, res, next) => {
    Order.find().exec()
        .then(documents => {
            res.status(200).json(documents);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;

            next(err);
        });
});


//eventlistener for GET requests
router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    Order.findById(id).exec()
        .then(document => {
            res.status(200).json(document);
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;

            next(err);
        });
});

//eventlistener for POST requests
router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        town: req.body.town,
        state: req.body.state,
        date: new Date(),
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode
    });

    order.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Order successfully created!",
                order: order
            });
        })
        .catch(error => {
            console.log(error);
            const err = new Error(error);
            err.status = error.status || 500;

            next(err);
        });

});

//eventlistener for DELETE requests
router.delete('/:id', async (req, res, next) => {
    const reply = await Order.findById(req.params.id);
    if (reply.owner != req.user) {
        res.status(401).json({
            message: "Authentication failed"
        });

    } else {
        Order.remove({ _id: req.params.id }).exec()
            .then(result => {
                res.status(200).json({
                    message: "Order deleted",
                })
            })
            .catch(error => {
                console.log(error);
                const err = new Error(error);
                err.status = error.status || 500;

                next(err);
            });
    }
});

//eventlistener for PATCH requests
router.patch('/:id', async (req, res, next) => {
    const reply = await Order.findById(req.params.id);
    if (reply.owner != req.user) {
        res.status(401).json({
            message: "Authentication failed"
        });

    } else {
        Order.update({ _id: req.params.id }, { $set: req.body })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: "Order updated!"
                });
            })
            .catch(error => {
                console.log(error);
                const err = new Error(error);
                err.status = error.status || 500;

                next(err);
            });
    }

});

router.use((req, res, next) => {
    const error = new Error("Only GET, POST, PATCH, DELETE commands supported");
    error.status = 500;
    next(error);
});

module.exports = router;

