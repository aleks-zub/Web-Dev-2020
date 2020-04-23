var express = require('express');
var router = express.Router();
var seat = require('../models/seat');
/* GET home page. */
//вивести список крісел//
router.get('/', function(req, res, next) {
    seat.find()
        .then(seats => res.render('index', { title: 'Express', seats: seats }))
        .catch(err => {
            console.error(err.message);
            throw err
        })
});
//редагувати крісла//
router.get('/edit-seat/:id', function(req, res, next) {
    res.render('edit-seat', { title: 'Express' });
});
router.post('/edit-seat/:id', function(req, res, next) {
    // res.render('edit-seat', { title: 'Express' });//
    //записати в базу даних//
    //перейти на сторінку індекса//
});
router.get('/delete-seat/:id', function(req, res, next) {
    //видалити крісло//
    //перейти на сторінку індекса//
});

module.exports = router;