const express = require('express');
const router = express.Router();
const college_controller = require('../controllers/college.controllers');


router.post('/create', college_controller.create);

router.get('/findalldetails', college_controller.findalldetails);

module.exports = router;