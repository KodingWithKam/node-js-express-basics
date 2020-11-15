const express = require('express');

const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('Im in another middleware');
    res.send('<h1>Hello from Express</h1>');
    // next(); allows express to move on to next middleware in line
});

module.exports = router;
