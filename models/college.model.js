const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let collegeSchema = new Schema({
    teachersName: String,
    collegeName: String,
    feeofCollege: Number,
    girls:Number,
    boys:Number,
    workingStaf:Number,
    warden:Number,
    totalNumberStudent:Number,
    totalNumberPeople:Number,
    principalName:String,
    totalNumberHod: String
});

module.exports = mongoose.model('college', collegeSchema);