var mongoose = require('mongoose');
var baby_car_seatSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Baby_car_seat', baby_car_seatSchema);