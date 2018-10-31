const mongoose = require('mongoose');
const College = require('../models/college.model');


exports.create = async function(req,res,next) {
    if(!req.body && !req.body.teachersName){
        return res.status(400).json({error:'you have must fill the field'});
    }
    const newCollege = new College({
    teachersName: req.body.teachersName,
    collegeName: req.body.collegeName,
    feeofCollege: req.body.feeofCollege,
    girls: req.body.girls,
    boys: req.body.boys,
    workingStaf: req.body.workingStaf,
    warden: req.body.warden,
    totalNumberStudent: req.body.totalNumberStudent,
    totalNumberPeople: req.body.totalNumberPeople,
    principalName: req.body.principalName,
    totalNumberHod: req.body.totalNumberPeople

    });

    try {
        const data = await newCollege.save();
        return res.json({data});
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}
    


exports.findalldetails = async function (req,res,next){
    try{
        const data = await College.find({});
        return res.status(200).json({data});
    }

    catch(err){
        console.log(err);
        next(err);

    }

}