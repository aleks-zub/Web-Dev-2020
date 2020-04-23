var mongoose = require('mongoose');
var seatSchema = new mongoose.Schema({
    imagePath: String,
    producer: String,
    country: String,
    type: String,
    color: String,
    price: String,
    ages_categories: String,
    type_of_implementation: String,
    quantity_of_fixators: String,
    material: String
});

module.exports = mongoose.model('Seat', seatSchema);