const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Witaj na stronie głównej")
        res.end();
    }else if(req.url === '/contact'){
        res.write("to jest strona kontakowa")
        res.end();
    }else{
        res.write("404 - PAGE NOT FOUND")
        res.end()
    }
});

server.listen(3000, 'localhost', () => {
    console.log("Serwer działa na porcie 3000 i adresie http://localhost:3000");
})