const baby_car_seat = require('../model/baby_car_seat');
//Create and save a new Seat
exports.create = (req, res) => {};

//Retrieve and return all notes from the database
exports.findAll = (req, res) => {
    baby_car_seat.find()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Find a single note with a noteId
exports.findOne = (req, res) => {
    baby_car_seat.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Update a note identified by the noteId in the request
exports.update = (req, res) => {
    baby_car_seat.findByIdAndUpdate(req.params.id, {
            producer: req.body.producer,
            country: req.body.country,
            type: req.body.type,
            color: req.body.color
        })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Update a note with the specified noteId in the request
exports.deleteBaby_car_seat = (req, res) => {};