const announ = require('../model/announ');
//Create and save a new announ
exports.create = (req, res) => {};

//Retrieve and return all notes from the database
exports.findAll = (req, res) => {
    announ.find()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Find a single note with a noteId
exports.findOne = (req, res) => {
    announ.findById(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Update a note identified by the noteId in the request
exports.update = (req, res) => {
    announ.findByIdAndUpdate(req.params.id, {
            date_of_registr: req.body.date_of_registr,
            date_of_update: req.body.date_of_update,
            tit: req.body.tit,
            artic: req.body.artic,
            author: req.body.author
        })
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};

//Update a note with the specified noteId in the request
exports.deleteAnnoun = (req, res) => {};