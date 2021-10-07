const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('event', eventSchema);