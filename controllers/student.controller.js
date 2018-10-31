const mongoose = require('mongoose');
const Student = require('../models/student.model');

//  students controllers
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
exports.baseRoute = function (req, res, next) {
res.send('you are on base route now');
};


// create and save the data

exports.create = async function(req,res,next){
    if(!req.body || !req.body.name || !req.body.rollNumber || !req.body.age || !req.body.age || !req.body.address || !req.body.contactNumber){
        return res.status(400).json({error: 'you must send data to the all field'});
    }

    const newStudent = new Student({
    
        name: req.body.name,
        rollNumber: req.body.rollNumber,
        age: req.body.age,
        address: req.body.address,
        contactNumber: req.body.contactNumber

    });
    try{
        const data = await newStudent.save();

        return res.json({data});
    }
    catch(err){
        return res.json({err});
        next(err);

    }
}
// find all the details of the students

exports.findAllStudentDetails = async function(req,res,next){
    try{
        const data = await Student.find({});
        return res.status(200).json({data});
    }
    catch(err){
        console.log(err);
        next(err);

    }

}

exports.findAllStudentDetailsByName = async function(req,res,next){
    try{
        const data = await Student.find({name: 'sweta shanu'});
        return res.json({data});
    }
    catch(err){
        console.log(err);
        next(err);
    }
} 

exports.findById = async function(req,res,next){
    if(!req.params.id){
        return res.status(400).json({error: 'id is must be required' });
    }
    console.log(req.params.id , typeof req.params.id);

try{
    const id = mongoose.Types.ObjectId(req.params.id);
    const data = await Student.findOne({_id : id});
    return res.json({data});
}
catch(err){
    console.log(err);
    next(err);
}

}


exports.getAndUpdate = async function(req,res,next){
    if(!req.params.id){
        return res.status(400).json({error: 'id is must be required'});
    }
    console.log(req.params.id , typeof req.params.id);

try{
    const data = await Student.findOneAndUpdate(req.params.id, {name: req.body.name});
    return res.json({data});
}
catch(err){
    console.log(err);
    next(err);
}
}

// filter
// search
//sort