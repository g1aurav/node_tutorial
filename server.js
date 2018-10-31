const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route');
const student = require('./routes/student.route');
const college = require('./routes/college.route');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection

const  dev_db_url = 'mongodb://localhost:27017/tutorial';
mongoose.connect(dev_db_url)
.then(() => {
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log('failed to connect to mongodb', err);
});

// app.get('/', function (req, res, next) {
//     if (req.params) {
//         next();
//     }
// }, (req, res, next) => {
//    console.log('inside second middleware');
//    res.send('hello from second middleware');
// });

// app.get('/data', (req, res, next) => {
//     res.status(200).json({name: 'sweta', age: 999});
// });
app.use('/products', product);
app.use('/student', student);
app.use('/college', college);

app.listen(3030, () => console.log(`Example app listening on port ${3030}!`))