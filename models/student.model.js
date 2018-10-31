const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String, required: true, max: 200},
    rollNumber: {type: String, required: true, max: 100},
    age: {type: Number, required: true, max: 200},
    address: {type: String, required: true, max: 1000},
    contactNumber: {type: String, required: true}

});
// export the model

module.exports = mongoose.model('Student', StudentSchema);