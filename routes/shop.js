const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req, res, next) => {
    //console.log('Im in another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // next(); allows express to move on to next middleware in line
});

module.exports = router;
