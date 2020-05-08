var express = require('express');
var router = express.Router();
var baby_car_seat = require('../models/baby_car_seat');
/* GET home page. */
router.get('/', function(req, res, next) {

    baby_car_seat.find()
        .then(baby_car_seats => res.render('index', { title: 'List', baby_car_seats: baby_car_seats }))
        .catch(err => {
            console.error(err.message);
            throw err
        })
});

router.get('/edit-baby_car_seat/:id', function(req, res, next) {

    baby_car_seat.findById(req.params.id)
        .then(baby_car_seat => res.render('edit-baby_car_seat', { title: 'Edit', baby_car_seat: baby_car_seat }))
        .catch(err => {
            console.error(err.message);
            throw err
        })
});

router.post('/edit-baby_car_seat/:id', function(req, res, next) {
    /*res.render('edit-baby_car_seat', { title: 'Edit' });*/
    /*write to data base*/
    baby_car_seat.findByIdAndUpdate(req.params.id, {
            producer: req.body.producer,
            country: req.body.country,
            type: req.body.type,
            color: req.body.color,
            price: req.body.price,
            ages_categories: req.body.ages_categories,
            type_of_implementation: req.body.type_of_implementation,
            quantity_of_fixators: req.body.quantity_of_fixators,
            material: req.body.material
        })
        .then(baby_car_seat => {
            console.log(baby_car_seat);
            res.redirect('/');
        })
        .catch(err => {
            console.error(err.message);
            throw err
        })

    /*go to index page*/
});
router.get('/create-baby_car_seat', function(req, res, next) {
    res.render('create-baby_car_seat', { title: 'Create' });
});

router.get('/delete-baby_car_seat/:id', function(req, res, next) {
    /* delete baby_car_seat*/
    baby_car_seat.findByIdAndDelete(req.params.id)
        .then(n => {
            res.redirect('/');
        })
        /*go to index page */
        .catch(err => {
            console.error(err.message);
            throw err
        })
});

module.exports = router;