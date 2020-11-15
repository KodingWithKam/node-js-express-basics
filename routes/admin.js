const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    //console.log('Im in middleware');
    res.send(`
        <html lang="en">
            <title>Add Product</title>
            <body>
                <h1>Add Product Page</h1>
                <form action="/product" method="post"><input type="text" name="title"><button type="submit">Add Product</button></form>
            </body>
        </html>`);
    // next(); allows express to move on to next middleware in line
});

router.post('/product',(req, res, next) => {
    // Print request body from form
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
