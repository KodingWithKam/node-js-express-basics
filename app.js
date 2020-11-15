const http = require('http');
const express = require('express');

const app = express();

// app.use allows us to add middleware (will be excecuted for every incoming request)
app.use((req, res, next) => {
    console.log('Im in middleware');
    // next(); allows express to move on to next middleware in line
});

const server = http.createServer(app);

server.listen(3000);
