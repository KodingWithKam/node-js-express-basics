const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../helpers/path');

// admin/add-product
router.get('/add-product',(req, res, next) => {
    //console.log('Im in middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // next(); allows express to move on to next middleware in line
});

// admin/add-product
router.post('/add-product',(req, res, next) => {
    // Print request body from form
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
