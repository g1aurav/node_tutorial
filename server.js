const express = require('express');

const app = express();

app.get('/', function (req, res, next) {
    if (req.params) {
        next();
    }
}, (req, res, next) => {
   console.log('inside second middleware');
   res.send('hello from second middleware'); 
});

app.get('/data', (req, res, next) => {
    res.status(200).json({name: 'sweta', age: 999});
});

app.listen(3030, () => console.log(`Example app listening on port ${3030}!`))