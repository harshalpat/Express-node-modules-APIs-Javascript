const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 5000;

const app = express();

app.use((req, res, next) =>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/html');
    res.end('<html><body><h1>This is an express server</h1></body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})