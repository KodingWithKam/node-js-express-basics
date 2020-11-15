const express = require('express');

const router = express.Router();

// admin/add-product
router.get('/add-product',(req, res, next) => {
    //console.log('Im in middleware');
    res.send(`
        <html lang="en">
            <title>Add Product</title>
            <body>
                <h1>Add Product Page</h1>
                <form action="/admin/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>
            </body>
        </html>`);
    // next(); allows express to move on to next middleware in line
});

// admin/add-product
router.post('/add-product',(req, res, next) => {
    // Print request body from form
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
