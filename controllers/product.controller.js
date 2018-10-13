const mongoose = require('mongoose');
const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.baseRoute = function (req, res, next) {
    res.send('you are on base route now');
};

exports.create = async function(req,res,next){
    if (!req.body || !req.body.name || !req.body.price) {
        return res.status(400).json({error: 'you must send price and name'});
    }
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    });

    try {
        const data = await newProduct.save();
        return res.status(200).json({data}); 
    } catch (err) {
        return res.error(err);
    }
};

exports.findById = async function(req,res,next){
    if(!req.params.id) {
        return res.status(400).json({error: 'product id is required'});
    }
    console.log(req.params.id , typeof req.params.id);
    
    try{
        const id = mongoose.Types.ObjectId(req.params.id);
        const data = await Product.findOne({_id: id});
        return res.status(200).json({data});
    }
    catch (err){
        console.log(err);
        next(err);
    }
}
exports.getAllProducts = async function(req,res,next){  
    try{
        const data = await Product.find({});
        return res.status(200).json({data});
    }
    catch (err){
        console.log(err);
        next(err);
    }
};

exports.findByIdAndUpdate = async function(req,res,next){
    if(!req.params.id){
        return res.status(400).json({data});
    }
    try{
        const data = await Product.findByIdAndUpdate(req.params.id, {name: req.body.name, price: req.body.price});
        return res.status(200).json({data});
    }
    catch (err){
        console.log(err);
        next(err);

    }
}


exports.findOneAndDelete= async function(req,res,next){
    if(!req.params.id){
        return res.status(400).json({data});
    }
    try{
        const data = await Product.findOneAndDelete(req.params.id);
        return res.status(200).json({data});
    }
    catch (err){
        console.log(err);
        next(err);
    }
}