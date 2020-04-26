const express = require('express');
const router = express.Router();
const baby_car_seats = require('../controllers/baby_car_seats.controller');

//POST - створити одне крісло
router.post('/', baby_car_seats.create);

//GET - всі сідла
router.get('/', baby_car_seats.findAll);

//GET + id - одне крісло
router.get('/:id', baby_car_seats.findOne);

//PUT - оновити
router.put('/:id', baby_car_seats.update);

//DELETE - видалити
router.delete('/:id', baby_car_seats.deleteBaby_car_seat);

module.exports = router;