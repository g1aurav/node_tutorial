const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');

router.get('/', product_controller.getAllProducts);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.post('/create' ,product_controller.create);
// find by id
router.get('/:id' ,product_controller.findById);

// find by id and update
router.put('/:id' , product_controller.findByIdAndUpdate);

// find and delete by id

router.delete('/:id' , product_controller.findOneAndDelete);


// router.get('/findByAll' , product_controller.findByAll);
module.exports = router;