const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

// app.use allows us to add middleware (will be excecuted for every incoming request)
app.use('/add-product',(req, res, next) => {
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

app.use('/product',(req, res, next) => {
    // Print request body from form
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) => {
    //console.log('Im in another middleware');
    res.send('<h1>Hello from Express</h1>');
    // next(); allows express to move on to next middleware in line
});

const server = http.createServer(app);

server.listen(3000);
