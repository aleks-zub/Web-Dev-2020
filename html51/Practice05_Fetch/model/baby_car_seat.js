const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let baby_car_seatSchema = new Schema({
    producer: String,
    country: String,
    type: String,
    color: String
});

module.exports = mongoose.model('Baby_car_seat', baby_car_seatSchema)