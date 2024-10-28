const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Server dziala!\n");
});

server.listen(3000, 'localhost', () => {
    console.log("Serwer działa na porcie 3000 i adresie http://localhost:3000");
})