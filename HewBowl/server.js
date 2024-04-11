const { createServer } = require('node:http');

var host = '127.0.0.1';

var port = '5000'

const server = createServer((req, res) => {


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('hello Jay');

})

server.listen(port, host);