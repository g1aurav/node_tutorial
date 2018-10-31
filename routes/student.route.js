const express = require('express');
const router = express.Router();



const student_controller = require('../controllers/student.controller');




// a simple test url to check that all of our files are communicating correctly.
router.get('/', student_controller.test);



// find all student details
router.get('/findAllStudentDetails', student_controller.findAllStudentDetails);

// insert and save the data to the student db

router.post('/create' , student_controller.create);


// find all the data by name

router.get('/findAllStudentDetailsByName', student_controller.findAllStudentDetailsByName);

// find the deatils of the name of the student by id

router.get('/:id', student_controller.findById);

// update the name of the student
router.put('/:id' , student_controller.getAndUpdate);

// exports the router

module.exports = router;