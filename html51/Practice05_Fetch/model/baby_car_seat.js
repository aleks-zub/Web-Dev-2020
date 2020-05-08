const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let baby_car_seatSchema = new Schema({
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

module.exports = mongoose.model('baby_car_seat', baby_car_seatSchema);