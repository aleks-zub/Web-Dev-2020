const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let announSchema = new Schema({
    date_of_registr: String,
    date_of_update: String,
    tit: String,
    artic: String,
    author: String

});

module.exports = mongoose.model('announ', announSchema)